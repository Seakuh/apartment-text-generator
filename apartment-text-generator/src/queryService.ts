// service.ts
import { QueryClient } from "@tanstack/react-query";
import { Platform } from "./Plattforms/data";

export const queryClient = new QueryClient();

// Fetch platforms based on city
export const fetchPlatforms = async (city: string): Promise<Platform[]> => {
  const response = await fetch(`/api/platforms?city=${city}`);
  if (!response.ok) throw new Error("Failed to fetch platforms");
  return response.json();
};
