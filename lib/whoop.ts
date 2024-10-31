// /lib/whoop.ts

import axios from "axios";
import pool from "./db"; // Import your database connection

// Interfaces for token management
interface TokenResponse {
  access_token: string;
  expires_in: number;
}

interface StoredToken {
  access_token: string;
  expiry: number;
}

// Interface for recovery data
export interface RecoveryData {
  data: {
    timestamp: string;
    recovery_score: number;
    hrv_rmssd_milli: number;
    resting_heart_rate: number;
    strain_score: number;
  };
}

// Function to obtain a new access token from Whoop API
async function getAccessToken(): Promise<TokenResponse> {
  const clientId = process.env.WHOOP_CLIENT_ID;
  const clientSecret = process.env.WHOOP_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Client ID or Client Secret is not set");
  }

  const tokenUrl = "https://api.prod.whoop.com/oauth/oauth2/token";

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  try {
    const response = await axios.post<TokenResponse>(tokenUrl, params, {
      auth: {
        username: clientId,
        password: clientSecret,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error(
      "Error obtaining access token:",
      error.response?.data || error.message
    );
    throw new Error("Failed to obtain access token");
  }
}

// Function to retrieve the stored token from the database
async function getStoredToken(): Promise<StoredToken | null> {
  const query =
    "SELECT access_token, expiry FROM oauth_tokens ORDER BY id DESC LIMIT 1";
  try {
    const result = await pool.query(query);
    if (result.rows.length > 0) {
      return result.rows[0];
    }
    return null;
  } catch (error: any) {
    console.error("Error retrieving stored token:", error.message);
    throw new Error("Failed to retrieve stored token");
  }
}

// Function to store the access token in the database
async function storeToken(
  accessToken: string,
  expiresIn: number
): Promise<void> {
  const expiry = Math.floor(Date.now() / 1000) + expiresIn - 60; // Current time + expiresIn - 60 seconds buffer
  const query =
    "INSERT INTO oauth_tokens (access_token, expiry) VALUES ($1, $2)";
  try {
    await pool.query(query, [accessToken, expiry]);
  } catch (error: any) {
    console.error("Error storing access token:", error.message);
    throw new Error("Failed to store access token");
  }
}

// Function to get a cached access token or fetch a new one if expired
export async function getCachedAccessToken(): Promise<string> {
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

  try {
    const storedToken = await getStoredToken();

    if (storedToken && storedToken.expiry > currentTime) {
      // Token is still valid
      return storedToken.access_token;
    } else {
      // Token expired or doesn't exist, fetch a new one
      const { access_token, expires_in } = await getAccessToken();
      await storeToken(access_token, expires_in);
      return access_token;
    }
  } catch (error: any) {
    console.error("Error in getCachedAccessToken:", error.message);
    throw new Error("Failed to get cached access token");
  }
}

// Function to fetch today's recovery data from Whoop API
export async function getTodayRecovery(): Promise<RecoveryData> {
  const accessToken = await getCachedAccessToken();

  const apiUrl =
    "https://api.prod.whoop.com/developer/v1/metrics/recovery/latest";

  try {
    const response = await axios.get<RecoveryData>(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error(
      "Error fetching recovery data:",
      error.response?.data || error.message
    );
    throw new Error("Failed to fetch recovery data");
  }
}

// Additional functions for other data types (e.g., workouts) can be added similarly
