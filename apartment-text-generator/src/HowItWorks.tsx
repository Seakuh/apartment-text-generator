import React from "react";
import "./HowItWorks.css";

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works">
      <h2>So funktioniert's 🚀</h2>
      <p>
        In nur drei Schritten zu Ihrer Traumwohnung - maßgeschneidert und
        effizient!
      </p>
      <div className="steps">
        <div className="step">
          <span className="step-number">1️⃣</span>
          <h3>Email angeben</h3>
          <p>
            Geben Sie Ihre Email-Adresse ein, um direkt loszulegen. Wir
            kontaktieren Sie mit einem auf Sie zugeschnittenen Plan.
          </p>
        </div>
        <div className="step">
          <span className="step-number">2️⃣</span>
          <h3>Prompt schreiben</h3>
          <p>
            Beschreiben Sie Ihre Wohnungswünsche – Lage, Größe, Budget oder
            besondere Anforderungen. Wir erledigen den Rest!
          </p>
        </div>
        <div className="step">
          <span className="step-number">3️⃣</span>
          <h3>Email erhalten</h3>
          <p>
            Erhalten Sie maßgeschneiderte Vorschläge, hilfreiche Tipps von
            Experten und Zugang zu exklusiven Tools wie unserem Chatbot.
          </p>
        </div>
      </div>
      <div className="extra-info">
        <h3>Was Sie erwartet 🏠</h3>
        <ul>
          <li>✨ Personalisierte Portale für Ihre Suche</li>
          <li>📋 Experten-Tipps, um Ihre Chancen zu maximieren</li>
          <li>🤖 Premium-Beratung und Chatbot-Zugang</li>
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;
