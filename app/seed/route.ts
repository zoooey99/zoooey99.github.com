// app/api/seed/route.ts
import { NextResponse } from "next/server";
import { db } from "@vercel/postgres";

const client = await db.connect();

// Mock data structure based on your provided data
const mockData = {
  today: {
    recovery: 85,
    hrv: 65,
    rhr: 52,
    timeSlept: "7h 30m",
  },
  lastMonth: {
    recovery: { green: 20, yellow: 8, red: 2 },
    avgHRV: 62,
    avgRHR: 54,
    avgSleep: "7h 15m",
    avgStrain: 12.5,
    workouts: {
      total: 25,
      byType: { running: 10, cycling: 8, strength: 7 },
    },
  },
  lastYear: {
    recovery: { green: 240, yellow: 100, red: 25 },
    avgHRV: 64,
    avgRHR: 53,
    avgSleep: "7h 20m",
    avgStrain: 13.2,
    workouts: {
      total: 300,
      byType: { running: 120, cycling: 100, strength: 80 },
    },
  },
  allTimeBest: {
    timeSlept: "9h 45m",
    hrv: 95,
    rhr: 48,
    strain: 20.5,
  },
};

async function seedToday() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS today_stats (
      id SERIAL PRIMARY KEY,
      recovery INT,
      hrv INT,
      rhr INT,
      time_slept VARCHAR
    );
  `;

  return client.sql`
    INSERT INTO today_stats (recovery, hrv, rhr, time_slept)
    VALUES (${mockData.today.recovery}, ${mockData.today.hrv}, ${mockData.today.rhr}, ${mockData.today.timeSlept})
    ON CONFLICT DO NOTHING;
  `;
}

async function seedLastMonth() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS last_month_stats (
      id SERIAL PRIMARY KEY,
      recovery_green INT,
      recovery_yellow INT,
      recovery_red INT,
      avg_hrv INT,
      avg_rhr INT,
      avg_sleep VARCHAR,
      avg_strain DECIMAL,
      workouts_total INT,
      workouts_running INT,
      workouts_cycling INT,
      workouts_strength INT
    );
  `;

  return client.sql`
    INSERT INTO last_month_stats (
      recovery_green, recovery_yellow, recovery_red,
      avg_hrv, avg_rhr, avg_sleep, avg_strain,
      workouts_total, workouts_running, workouts_cycling, workouts_strength
    )
    VALUES (
      ${mockData.lastMonth.recovery.green}, ${mockData.lastMonth.recovery.yellow}, ${mockData.lastMonth.recovery.red},
      ${mockData.lastMonth.avgHRV}, ${mockData.lastMonth.avgRHR}, ${mockData.lastMonth.avgSleep}, ${mockData.lastMonth.avgStrain},
      ${mockData.lastMonth.workouts.total}, ${mockData.lastMonth.workouts.byType.running},
      ${mockData.lastMonth.workouts.byType.cycling}, ${mockData.lastMonth.workouts.byType.strength}
    )
    ON CONFLICT DO NOTHING;
  `;
}

async function seedLastYear() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS last_year_stats (
      id SERIAL PRIMARY KEY,
      recovery_green INT,
      recovery_yellow INT,
      recovery_red INT,
      avg_hrv INT,
      avg_rhr INT,
      avg_sleep VARCHAR,
      avg_strain DECIMAL,
      workouts_total INT,
      workouts_running INT,
      workouts_cycling INT,
      workouts_strength INT
    );
  `;

  return client.sql`
    INSERT INTO last_year_stats (
      recovery_green, recovery_yellow, recovery_red,
      avg_hrv, avg_rhr, avg_sleep, avg_strain,
      workouts_total, workouts_running, workouts_cycling, workouts_strength
    )
    VALUES (
      ${mockData.lastYear.recovery.green}, ${mockData.lastYear.recovery.yellow}, ${mockData.lastYear.recovery.red},
      ${mockData.lastYear.avgHRV}, ${mockData.lastYear.avgRHR}, ${mockData.lastYear.avgSleep}, ${mockData.lastYear.avgStrain},
      ${mockData.lastYear.workouts.total}, ${mockData.lastYear.workouts.byType.running},
      ${mockData.lastYear.workouts.byType.cycling}, ${mockData.lastYear.workouts.byType.strength}
    )
    ON CONFLICT DO NOTHING;
  `;
}

async function seedAllTimeBest() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS all_time_best (
      id SERIAL PRIMARY KEY,
      time_slept VARCHAR,
      hrv INT,
      rhr INT,
      strain DECIMAL
    );
  `;

  return client.sql`
    INSERT INTO all_time_best (time_slept, hrv, rhr, strain)
    VALUES (${mockData.allTimeBest.timeSlept}, ${mockData.allTimeBest.hrv}, ${mockData.allTimeBest.rhr}, ${mockData.allTimeBest.strain})
    ON CONFLICT DO NOTHING;
  `;
}

// Route handler for seeding data
export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedToday();
    await seedLastMonth();
    await seedLastYear();
    await seedAllTimeBest();
    await client.sql`COMMIT`;

    return NextResponse.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    console.error("Error seeding data:", error);
    return NextResponse.json({ error: "Error seeding data" }, { status: 500 });
  }
}
