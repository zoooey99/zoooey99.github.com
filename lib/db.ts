// /lib/db.ts

import { Pool } from "pg";
import { RecoveryData } from "./whoop";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;

// Function to save recovery data to the database
export async function saveRecoveryData(
  recoveryData: RecoveryData
): Promise<void> {
  const { data } = recoveryData;

  const date = data.timestamp.slice(0, 10); // Extract date in 'YYYY-MM-DD' format
  const recoveryScore = data.recovery_score;
  const hrv = data.hrv_rmssd_milli;
  const rhr = data.resting_heart_rate;
  const strain = data.strain_score;

  const query = `
    INSERT INTO daily_metrics (date, recovery, hrv, rhr, strain)
    VALUES ($1, $2, $3, $4, $5)
    ON CONFLICT (date)
    DO UPDATE SET recovery = EXCLUDED.recovery, hrv = EXCLUDED.hrv, rhr = EXCLUDED.rhr, strain = EXCLUDED.strain;
  `;

  const values = [date, recoveryScore, hrv, rhr, strain];

  try {
    await pool.query(query, values);
  } catch (error: any) {
    console.error("Error saving recovery data:", error.message);
    throw new Error("Failed to save recovery data");
  }
}

// Function to get today's stats from the database
export async function getTodayStats(): Promise<{
  recovery: number;
  hrv: number;
  rhr: number;
  strain: number;
}> {
  const today = new Date().toISOString().slice(0, 10); // Get today's date in 'YYYY-MM-DD' format

  const query = `
    SELECT recovery, hrv, rhr, strain
    FROM daily_metrics
    WHERE date = $1;
  `;

  const values = [today];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length > 0) {
      const { recovery, hrv, rhr, strain } = result.rows[0];
      return { recovery, hrv, rhr, strain };
    } else {
      // Handle case where there is no data for today
      return { recovery: 0, hrv: 0, rhr: 0, strain: 0 };
    }
  } catch (error: any) {
    console.error("Error fetching today's stats:", error.message);
    throw new Error("Failed to fetch today's stats");
  }
}
