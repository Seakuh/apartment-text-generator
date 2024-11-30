import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Import von react-i18next
import { Link } from "react-router-dom";
import "./Header.css";
import { useUser } from "./context/UserProvider";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useUser(); // Verwende useUser statt AppContext
  const { i18n } = useTranslation(); // Zugriff auf i18n

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang); // Context aktualisieren
    i18n.changeLanguage(lang); // i18next Sprache ändern
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <Link to="/home-finder/">
          <img src="home_ginue_logo.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="header-center dancing-script-headline">
        <h1>Home Finder</h1>
      </div>
      <div className="header-right">
        <button
          className={`language-button ${language === "de" ? "active" : ""}`}
          onClick={() => changeLanguage("de")}
        >
          🇩🇪
        </button>
        <button
          className={`language-button ${language === "en" ? "active" : ""}`}
          onClick={() => changeLanguage("en")}
        >
          🇬🇧
        </button>
      </div>
    </header>
  );
};

export default Header;
