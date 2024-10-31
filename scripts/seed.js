// scripts/seed.js
require('dotenv').config();
const { Client } = require('pg');

// Define mock data
const mockData = {
  today: {
    recovery: 85,
    hrv: 65,
    rhr: 52,
    timeSlept: '7h 30m',
  },
  lastMonth: {
    recovery: { green: 20, yellow: 8, red: 2 },
    avgHRV: 62,
    avgRHR: 54,
    avgSleep: '7h 15m',
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
    avgSleep: '7h 20m',
    avgStrain: 13.2,
    workouts: {
      total: 300,
      byType: { running: 120, cycling: 100, strength: 80 },
    },
  },
  allTimeBest: {
    timeSlept: '9h 45m',
    hrv: 95,
    rhr: 48,
    strain: 20.5,
  },
};

// Initialize the Postgres client
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function seed() {
  try {
    await client.connect();

    // Create tables if not exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS stats_today (
        id SERIAL PRIMARY KEY,
        recovery INTEGER,
        hrv INTEGER,
        rhr INTEGER,
        time_slept VARCHAR
      );
      CREATE TABLE IF NOT EXISTS stats_last_month (
        id SERIAL PRIMARY KEY,
        recovery_green INTEGER,
        recovery_yellow INTEGER,
        recovery_red INTEGER,
        avg_hrv INTEGER,
        avg_rhr INTEGER,
        avg_sleep VARCHAR,
        avg_strain DECIMAL,
        workouts_total INTEGER,
        workouts_running INTEGER,
        workouts_cycling INTEGER,
        workouts_strength INTEGER
      );
      CREATE TABLE IF NOT EXISTS stats_last_year (
        id SERIAL PRIMARY KEY,
        recovery_green INTEGER,
        recovery_yellow INTEGER,
        recovery_red INTEGER,
        avg_hrv INTEGER,
        avg_rhr INTEGER,
        avg_sleep VARCHAR,
        avg_strain DECIMAL,
        workouts_total INTEGER,
        workouts_running INTEGER,
        workouts_cycling INTEGER,
        workouts_strength INTEGER
      );
      CREATE TABLE IF NOT EXISTS stats_all_time_best (
        id SERIAL PRIMARY KEY,
        time_slept VARCHAR,
        hrv INTEGER,
        rhr INTEGER,
        strain DECIMAL
      );
    `);

    // Insert data into tables
    await client.query(
      `INSERT INTO stats_today (recovery, hrv, rhr, time_slept) VALUES ($1, $2, $3, $4)`,
      [mockData.today.recovery, mockData.today.hrv, mockData.today.rhr, mockData.today.timeSlept]
    );

    await client.query(
      `INSERT INTO stats_last_month (recovery_green, recovery_yellow, recovery_red, avg_hrv, avg_rhr, avg_sleep, avg_strain, workouts_total, workouts_running, workouts_cycling, workouts_strength)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
      [
        mockData.lastMonth.recovery.green,
        mockData.lastMonth.recovery.yellow,
        mockData.lastMonth.recovery.red,
        mockData.lastMonth.avgHRV,
        mockData.lastMonth.avgRHR,
        mockData.lastMonth.avgSleep,
        mockData.lastMonth.avgStrain,
        mockData.lastMonth.workouts.total,
        mockData.lastMonth.workouts.byType.running,
        mockData.lastMonth.workouts.byType.cycling,
        mockData.lastMonth.workouts.byType.strength,
      ]
    );

    await client.query(
      `INSERT INTO stats_last_year (recovery_green, recovery_yellow, recovery_red, avg_hrv, avg_rhr, avg_sleep, avg_strain, workouts_total, workouts_running, workouts_cycling, workouts_strength)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
      [
        mockData.lastYear.recovery.green,
        mockData.lastYear.recovery.yellow,
        mockData.lastYear.recovery.red,
        mockData.lastYear.avgHRV,
        mockData.lastYear.avgRHR,
        mockData.lastYear.avgSleep,
        mockData.lastYear.avgStrain,
        mockData.lastYear.workouts.total,
        mockData.lastYear.workouts.byType.running,
        mockData.lastYear.workouts.byType.cycling,
        mockData.lastYear.workouts.byType.strength,
      ]
    );

    await client.query(
      `INSERT INTO stats_all_time_best (time_slept, hrv, rhr, strain) VALUES ($1, $2, $3, $4)`,
      [
        mockData.allTimeBest.timeSlept,
        mockData.allTimeBest.hrv,
        mockData.allTimeBest.rhr,
        mockData.allTimeBest.strain,
      ]
    );

    console.log('Data seeded successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await client.end();
  }
}

seed();
