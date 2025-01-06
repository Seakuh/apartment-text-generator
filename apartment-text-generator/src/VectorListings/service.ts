const API_URL = import.meta.env.VITE_API_URL;

export interface ListingResult {
  id: string;
  title: string;
  description: string;
  price: number;
  bedrooms: number;
  location: string;
  features: string[];
  furnished: boolean;
  moveInDate: Date;
  [key: string]: any;
}

export interface TenantSearchResult {
  id: string;
  title: string;
  description: string;
  budget: number;
  preferredBedrooms: number;
  preferredLocations: string[];
  earliestMoveInDate: Date;
  latestMoveInDate: Date;
  [key: string]: any;
}

export interface SearchResult {
  type: 'listing' | 'tenantSearch';
  data: ListingResult | TenantSearchResult;
}

export interface SearchFilters {
  [key: string]: any;
}

export async function searchListings(
  query: string,
  type: 'tenant' | 'landlord',
  filters: SearchFilters = {},
): Promise<SearchResult[]> {
  try {
    console.log('Suche starten:', query, type, filters);
    const response = await fetch(`${API_URL}/home-finder/vector-listings/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        type,
        filters,
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data as SearchResult[];
  } catch (error) {
    console.error('Fehler bei der Suche:', error);
    throw error;
  }
}
