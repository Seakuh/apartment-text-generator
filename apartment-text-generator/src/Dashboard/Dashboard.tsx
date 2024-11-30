import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";
import Header from "../Header";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useUser(); // Zugriff auf Ladezustand und Nutzer

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/home-finder/login"); // Weiterleitung zum Login
    }
  }, [isLoading, user, navigate]);

  if (isLoading) {
    return <div>Loading...</div>; // Ladeanzeige während der Initialisierung
  }

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
    { emoji: "🏠", label: "Meine Häuser", route: "/home-finder/my-homes" },
    { emoji: "👤", label: "Profil", route: "/home-finder/profile" },
  ];

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <h1>Willkommen im Dashboard</h1>
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
