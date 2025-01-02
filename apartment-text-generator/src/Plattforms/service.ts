// service.ts
import { QueryClient } from "@tanstack/react-query";
import { Platform } from "./data";

export const queryClient = new QueryClient();

// Fetch platforms based on city
export const fetchPlatforms = async (city: string): Promise<Platform[]> => {
  const response = await fetch(`/api/platforms?city=${city}`);
  if (!response.ok) throw new Error("Failed to fetch platforms");
  return response.json();
};

export const updateFavorite = async (
  platformName: string,
  isFavorite: boolean
) => {
  try {
    const response = await fetch("/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ platformName, isFavorite }),
    });
    if (!response.ok) {
      throw new Error("Fehler beim Aktualisieren des Favoritenstatus");
    }
  } catch (error) {
    console.error(error);
  }
};
