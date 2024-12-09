import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./HeroSection.css";

const images = [
  "home_picture_apartment_modern.webp",
  "home_picture_wg_leipzig.webp",
  "home_picture_apartment_dusseldorf.webp",
  "home_picture_sweet_green.webp",
  "home_picture_apartment_berlin.webp",
  "home_picture_apartment_calm_stil.webp",
  "home_picture_apartment_munich.webp",
  "home_picture_apartment_calm_stil.webp",
  "home_picture_apartment_hamburg.webp",
  "home_picture_apartment_cologne.webp",
  "home_picture_wg_hannover.webp",
];

interface HeroSectionProps {
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setPrompt }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useTranslation();

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPrompt(e.target.value);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Wechselt alle 5 Sekunden
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero-section">
      <div className="slideshow">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${currentImage === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>{t("headline")}</h1>
      </div>
    </header>
  );
};

export default HeroSection;
