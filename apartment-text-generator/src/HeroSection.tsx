import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "./context/AppContext"; // Für die Sprachsteuerung
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  const { prompt, setPrompt } = useContext(AppContext); // Zugriff auf den Prompt
  const { t } = useTranslation(); // Für die Übersetzung

  return (
    <header className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>{t("findYourHome")}</h1>
        <p>{t("heroSubtitle")}</p>
        <form className="prompt-form">
          <input
            type="text"
            placeholder={t("promptPlaceholder")}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="prompt-input"
          />
          <button type="submit" className="prompt-button">
            {t("startButton")}
          </button>
        </form>
      </div>
    </header>
  );
};

export default HeroSection;
