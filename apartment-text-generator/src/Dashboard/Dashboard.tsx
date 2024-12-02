import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

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
    { emoji: "🏠", label: "Meine Cards", route: "/home-finder/my-homes" },
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
