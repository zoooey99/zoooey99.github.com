// /pages/api/fetch-data.ts

import { NextApiRequest, NextApiResponse } from "next";
import { getTodayRecovery } from "../../lib/whoop";
import { saveRecoveryData } from "../../lib/db"; // Function to save data to your database

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const SECRET_KEY = process.env.SECRET_KEY;

  if (req.headers["x-secret-key"] !== SECRET_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method !== "POST") {
    return res
      .setHeader("Allow", ["POST"])
      .status(405)
      .json({ error: "Method Not Allowed" });
  }

  try {
    // Fetch data from Whoop API
    const recoveryData = await getTodayRecovery();

    // Save data to the database
    await saveRecoveryData(recoveryData);

    res.status(200).json({ message: "Data fetched and stored successfully" });
  } catch (error: any) {
    console.error("Error in fetch-data API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
