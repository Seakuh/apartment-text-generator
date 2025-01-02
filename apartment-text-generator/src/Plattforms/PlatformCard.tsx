import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./PlatformCard.css";

type PlatformProps = {
  name: string;
  link: string;
  logo: string | null;
  stats: {
    reliability: number;
    userFriendliness: number;
    offerScope: number;
    pricePerformance: number;
    security: number;
    additionalFeatures: number;
    customerSupport: number;
  };
  onFavoriteToggle: (name: string, isFavorite: boolean) => void; // Callback für Favoriten
};

const PlatformCard: React.FC<PlatformProps> = ({
  name,
  link,
  logo,
  stats,
  onFavoriteToggle,
}) => {
  const [bgColor, setBgColor] = useState("#f8f9fa");
  const [filled, setFilled] = useState(false); // Für Animation
  const { t } = useTranslation(); // Zugriff auf i18n
  const [isFavorite, setIsFavorite] = useState(false);

  // Calculate background color based on the logo
  useEffect(() => {
    if (!logo) return;
    // Dummy color extraction (replace with a real library like `color-thief` if needed)
    const primaryColor = "#3DAFAC"; // Replace with the actual extracted color
    setBgColor(primaryColor + "20"); // Add transparency
  }, [logo]);

  // Trigger animation when component is mounted
  useEffect(() => {
    setFilled(true);
  }, []);

  // Determine bar color based on value
  const getBarColor = (value: number) => {
    if (value >= 85) return "green";
    if (value >= 70) return "yellow";
    return "red";
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation(); // Verhindert das Öffnen des Links
    setIsFavorite(!isFavorite);
    onFavoriteToggle(name, !isFavorite); // Callback ausführen
  };

  return (
    <div
      className="platform-card"
      onClick={() => window.open(link, "_blank")}
      style={{ backgroundColor: bgColor }}
    >
      <div className="favorite-icon" onClick={toggleFavorite}>
        {isFavorite ? "❤️" : "🤍"}
      </div>
      <img
        className="platform-logo"
        src={logo || "public/home_ginue_logo.png"}
        alt={`${name} logo`}
      />
      <h3 className="platform-title">{name}</h3>
      <div className="platform-statistics">
        {Object.entries(stats).map(([key, value]) => (
          <div className="metric" key={key}>
            <span className="metric-name">{t(`platforms.${key}`)}</span>
            <div className="metric-bar">
              <div
                className={`metric-bar-fill ${getBarColor(value)}`}
                style={{
                  width: filled ? `${value}%` : "0%", // Animiert von 0% auf den Wert
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformCard;
