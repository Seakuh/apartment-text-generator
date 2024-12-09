import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserProvider";
import "./UserListings.css";

interface Listing {
  title: string;
  description: string;
  platform: string;
  link: string;
  landlordName: string;
  landlordEmail: string;
  createdAt: string;
  generatedMessage: string;
}

const UserListings: React.FC = () => {
  const { user } = useUser();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchListings = async () => {
      console.log(user);

      if (!user?.token) {
        console.error("No token available. User not authenticated.");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:3000/home-finder/listings/user`, // Keine userId in der URL
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`, // JWT-Token im Header
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);

        setListings(data.listings);
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [user]);

  return (
    <div className="user-listings">
      <h1 className="neon-title">Deine Listings</h1>
      {loading ? (
        <p className="loading-text">Lade deine Listings...</p>
      ) : listings.length > 0 ? (
        listings.map((listing, index) => (
          <div key={index} className="listing-card">
            <div className="card-header">
              <h2>{listing.title || "Kein Titel"}</h2>
              <a href={listing.link} target="_blank" rel="noopener noreferrer">
                Zum Inserat
              </a>
            </div>
            <p>
              <strong>Vermieter:</strong> {listing.landlordName || "Unbekannt"}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {listing.landlordEmail || "Keine Email verfügbar"}
            </p>
            <p>
              <strong>Plattform:</strong>{" "}
              {listing.platform || "Keine Plattform"}
            </p>
            <p className="generated-message">
              <strong>Generierter Text:</strong>{" "}
              {listing.generatedMessage || "Keine Plattform"}
            </p>
            <p className="created-date">
              Erstellt am:{" "}
              {new Date(listing.createdAt).toLocaleDateString("de-DE")}
            </p>
          </div>
        ))
      ) : (
        <p className="no-listings">Keine Listings gefunden.</p>
      )}
    </div>
  );
};

export default UserListings;
