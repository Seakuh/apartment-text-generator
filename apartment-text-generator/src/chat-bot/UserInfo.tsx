import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserInfo.css";

interface UserInfoProps {
  userData: {
    location: string;
    budget: number;
    floor: string | null;
    bedrooms: number;
    garden: boolean | null;
    balcony: boolean | null;
    features: string[];
    districts: string | null;
    furnished: boolean | null;
    petsAllowed: boolean | null;
    maxDistance: number;
  };
}

const UserInfo: React.FC<UserInfoProps> = ({ userData }) => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/home-finder/user");
  };

  return (
    <div className="user-info-container">
      <h2 className="user-info-title">Deine Präferenzen</h2>
      <h3>Das weiß der Chatbot über Dich 🤖</h3>
      <div className="user-info-card">
        <p>
          <strong>📍 Standort:</strong> {userData.location || "Nicht angegeben"}
        </p>
        <p>
          <strong>💰 Budget:</strong> {userData.budget || "Nicht angegeben"} €
        </p>
        <p>
          <strong>🏢 Etage:</strong> {userData.floor || "Nicht angegeben"}
        </p>
        <p>
          <strong>🛏️ Schlafzimmer:</strong>{" "}
          {userData.bedrooms || "Nicht angegeben"}
        </p>
        <p>
          <strong>🌱 Garten:</strong> {userData.garden ? "Ja" : "Nein"}
        </p>
        <p>
          <strong>🌅 Balkon:</strong> {userData.balcony ? "Ja" : "Nein"}
        </p>
        <p>
          <strong>✨ Besondere Features:</strong>{" "}
          {userData.features.length > 0
            ? userData.features.join(", ")
            : "Keine"}
        </p>
        <p>
          <strong>🗺️ Bezirke:</strong> {userData.districts || "Nicht angegeben"}
        </p>
        <p>
          <strong>🐾 Haustiere erlaubt:</strong>{" "}
          {userData.petsAllowed ? "Ja" : "Nein"}
        </p>
        <p>
          <strong>📏 Maximale Entfernung:</strong>{" "}
          {userData.maxDistance || "Nicht angegeben"} km
        </p>
      </div>
      <button className="edit-profile-button" onClick={handleEditProfile}>
        Profil bearbeiten
      </button>
      <h3>Lass uns Chaten, stelle gerne alle Fragen</h3>
    </div>
  );
};

export default UserInfo;
