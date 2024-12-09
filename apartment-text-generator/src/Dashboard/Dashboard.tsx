import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const { user } = useUser(); // Benutzer aus dem Kontext abrufen
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Wenn kein Benutzer angemeldet ist, auf die Startseite weiterleiten
      navigate("/");
    }
  }, [user, navigate]);

  const apps = [
    {
      emoji: "💬",
      label: "Nachricht generieren",
      route: "/home-finder/generate-message",
    },
    {
      emoji: "📋",
      label: "Inserat generieren",
      route: "/home-finder/generate-inserat",
    },
    {
      emoji: "🏠",
      label: "Meine Cards",
      route: `/home-finder/listings/`, // Dynamische Route mit userId
    },
    { emoji: "👤", label: "Profil", route: "/home-finder/user" },
    { emoji: "💡", label: "Chat Bot", route: "/home-finder/chat-bot" },
  ];

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
          {apps.map((app, index) => (
            <div
              key={index}
              className="card"
              onClick={() => navigate(app.route)}
            >
              <div className="emoji">{app.emoji}</div>
              <p>{app.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
