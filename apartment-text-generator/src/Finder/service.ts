import { getToken } from "../context/authService";

export const fetchListings = async () => {
  const token = getToken();

  if (!token) {
    throw new Error("No token found. Please log in.");
  }

  const response = await fetch(
    "http://localhost:3000/home-finder/scraping/search",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch listings");
  }

  return response.json();
};
