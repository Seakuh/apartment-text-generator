// Finder.tsx
import React, { useEffect, useState } from "react";
import "./Finder.css";
import { fetchListings } from "./service";

interface Listing {
  imageUrl: string;
  description: string;
  price: string;
  squareMeters: string;
  location: string;
}

const Finder: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadListings = async () => {
      try {
        const data = await fetchListings();
        setListings(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    loadListings();
  }, []);

  return (
    <div className="finder-container">
      <h1>Available Listings</h1>
      {error && <div className="error">{error}</div>}
      <div className="listings-grid">
        {listings.length > 0 ? (
          listings.map((listing, index) => (
            <div key={index} className="listing-card">
              <img src={listing.imageUrl} alt="Listing" />
              <div className="listing-details">
                <p>
                  <strong>Description:</strong> {listing.description}
                </p>
                <p>
                  <strong>Price:</strong> {listing.price}
                </p>
                <p>
                  <strong>Size:</strong> {listing.squareMeters}
                </p>
                <p>
                  <strong>Location:</strong> {listing.location}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No listings found.</p>
        )}
      </div>
    </div>
  );
};

export default Finder;
