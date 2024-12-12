import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";
import "./Dashboard.css";
import { getMenuItems } from "../menuData";
import { useTranslation } from "react-i18next";
import loadingLogo from "/"

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true); // Ladezustand
  const { user } = useUser(); // Benutzer aus dem Kontext abrufen
  const navigate = useNavigate();
  const { t } = useTranslation();
  const items = getMenuItems(t); // Menüeinträge mit Übersetzungen

  useEffect(() => {
    // Benutzer prüfen und mindestens 1 Sekunde warten
    const timer = setTimeout(() => {
      if (!user) {
        navigate("/home-finder");
      } else {
        setLoading(false);
      }
    }, 1000); // 1 Sekunde Wartezeit

    return () => clearTimeout(timer); // Timer bereinigen
  }, [user, navigate]);


  if (loading) {
    // Ladeanimation anzeigen, solange der Benutzerzustand geprüft wird
    return (
      <div className="loading-container">
        <img
          src="public/home_ginue_logo.png"
          alt="Home Ginue Logo"
          className="logo"
        />
        <p className="loading-text">Lädt...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="dashboard-container">
        <div className="dashboard-description">
          <h1>Home Finder Dashboard</h1>
          <p>
            Der perfekte Text-Generator! <br />
            Hier kannst du Texte für Inserate generieren lassen, die mit einer
            perfekt getunten AI auf Textgenerierung für Wohnungen, Zuhause,
            Häuser und Apartments trainiert wurden. <br />
            Zusätzlich bietet die AI wertvolle Tipps und Tools, die dir helfen,
            dein Traumzuhause zu finden.
          </p>
        </div>
        <div className="grid">
          {items.map((item) => (
            <div
              key={item.route}
              className="card"
              onClick={() => navigate(item.route)}
            >
              <div className="emoji">{item.emoji}</div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
