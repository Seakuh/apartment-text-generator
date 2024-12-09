import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Import von react-i18next
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useUser } from "./context/UserProvider";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n } = useTranslation(); // Zugriff auf i18n
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const { user, language, setLanguage, isLoading, logout } = useUser();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(user ? "/home-finder/home" : "/home-finder/");
  };
  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeBurgerMenu = () => {
    setIsBurgerOpen(false);
  };
  const changeLanguage = (lang: string) => {
    setLanguage(lang); // Context aktualisieren
    i18n.changeLanguage(lang); // i18next Sprache ändern
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-left" onClick={handleLogoClick}>
        <img src="home_ginue_logo.png" alt="Logo" className="logo" />
      </div>
      <div className="header-center dancing-script-headline">
        <h1>Home Finder</h1>
      </div>
      <div className="header-right">
        {user ? (
          <>
            <button className="burger-menu-button" onClick={toggleBurgerMenu}>
              ☰
            </button>
          </>
        ) : (
          <button
            className="login-button"
            onClick={() => navigate("/home-finder/login")}
          >
            Login
          </button>
        )}
      </div>
      {isBurgerOpen && (
        <nav className="burger-menu">
          <ul>
            {user ? (
              <>
                <li onClick={closeBurgerMenu}>
                  <Link to="/home-finder/generate-message">
                    💬 Nachricht generieren
                  </Link>
                </li>
                <li onClick={closeBurgerMenu}>
                  <Link to="/home-finder/generate-inserat">
                    📋 Inserat generieren
                  </Link>
                </li>
                <li onClick={closeBurgerMenu}>
                  <Link to={`/home-finder/listings/`}>🏠 Meine Listings</Link>
                </li>
                <li onClick={closeBurgerMenu}>
                  <Link to="/home-finder/user">👤 Profil</Link>
                </li>
                <li onClick={closeBurgerMenu}>
                  <Link to="/home-finder/chat-bot">💡 Chat Bot</Link>
                </li>
                <li className="language-button-container">
                  <button
                    className="language-button"
                    onClick={() => changeLanguage("de")}
                  >
                    🇩🇪
                  </button>
                  <button
                    className="language-button"
                    onClick={() => changeLanguage("en")}
                  >
                    🇬🇧
                  </button>
                </li>
                <li className="logout-button-container">
                  <button
                    className="logout-button"
                    onClick={() => {
                      logout(); // Benutzer ausloggen
                      closeBurgerMenu(); // Menü schließen
                      navigate("/home-finder/"); // Navigation auslösen
                    }}
                  >
                    🔓 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button onClick={() => changeLanguage("de")}>
                    🇩🇪 Deutsch
                  </button>
                </li>
                <li>
                  <button onClick={() => changeLanguage("en")}>
                    🇬🇧 English
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
