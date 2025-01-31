export const BASE_URL = process.env.NODE_ENV === "development"
  ? "http://183.83.216.29:7777/api" // Directly use API in development
  : "/api"; // Use Vercel proxy in production
