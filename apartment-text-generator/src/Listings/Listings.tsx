import React, { useEffect, useState } from 'react';
import './Listings.css';
import { fetchListings } from './service';
import "./Listings.css";
import ListingItem from './ListingsItem';

const Listings: React.FC = () => {
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadListings = async () => {
      try {
        const data = await fetchListings();
        console.log('Listings:', data);
        setListings(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load listings. Please try again later.');
        setLoading(false);
      }
    };

    console.log('Loading listings...');

    loadListings();
  }, []);

  if (loading) return <div>Loading listings...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="listings-container">
      {listings.map((listing) => (
        <ListingItem key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default Listings;
