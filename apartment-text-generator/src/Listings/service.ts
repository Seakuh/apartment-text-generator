const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  console.error("VITE_API_URL is not defined. Please check your .env file.");
}

/**
 * Holt alle Listings vom Backend.
 * @returns Promise mit einer Liste von Listings.
 */
export const fetchListings = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${API_URL}/home-finder/listings`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching listings: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Fetched listings:', data.listings);
    return data.listings;
  } catch (error) {
    console.error('Error in fetchListings:', error);
    throw error;
  }
};
