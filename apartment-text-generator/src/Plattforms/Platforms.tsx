import React, { useState } from "react";
import { platforms } from "./data";
import PlatformCard from "./PlatformCard";
import "./Platforms.css";

const Platforms: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorite = (name: string, isFavorite: boolean) => {
    setFavorites((prev) =>
      isFavorite ? [...prev, name] : prev.filter((fav) => fav !== name)
    );
  };

  return (
    <div className="platform-container">
      <div className="platforms-grid">
        {platforms.map((platform, index) => (
          <PlatformCard
            key={index}
            name={platform.name}
            link={platform.link}
            logo={platform.logo || ""}
            stats={{
              reliability: platform.reliability,
              userFriendliness: platform.userFriendliness,
              offerScope: platform.offerScope,
              pricePerformance: platform.pricePerformance,
              security: platform.security,
              additionalFeatures: platform.additionalFeatures,
              customerSupport: platform.customerSupport,
            }}
            onFavoriteToggle={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Platforms;
