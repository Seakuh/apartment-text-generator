import React, { useEffect, useState } from "react";
import "./HeroSection.css";

const images = [
  "home_picture_apartment_modern.webp",
  "home_picture_apartment_berlin.webp",
  "home_picture_apartment_munich.webp",
  "home_picture_apartment_calm_stil.webp",
  "home_picture_sweet_green.webp",
  "home_picture_apartment_cologne.webp",
  "home_picture_apartment_dusseldorf.webp",
  "home_picture_apartment_hamburg.webp",
  "home_picture_apartment_calm_stil.webp",
  "home_picture_wg_hannover.webp",
  "home_picture_wg_leipzig.webp",
];

interface HeroSectionProps {
  setPrompt: React.Dispatch<React.SetStateAction<string>>; // Funktion zum Aktualisieren des Prompts
}

const HeroSection: React.FC<HeroSectionProps> = ({ setPrompt }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value); // Aktualisiert den zentralen Prompt
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Bild wechselt alle 5 Sekunden
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero-section">
      <div
        className="slideshow"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Finde dein Zuhause</h1>
        <p>Wo deine Suche endet und dein neues Kapitel beginnt.</p>
        <form className="prompt-form">
          <input
            type="text"
            placeholder="Was suchen Sie?"
            className="prompt-input"
            onChange={handleInputChange} // Ändert den zentralen Prompt
          />
        </form>
      </div>
    </header>
  );
};

export default HeroSection;
