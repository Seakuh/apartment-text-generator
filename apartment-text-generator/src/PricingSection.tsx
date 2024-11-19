import React from "react";
import "./PricingSection.css";

const PricingSection: React.FC = () => {
  return (
    <section className="pricing-section">
      <h2>Preise</h2>
      <p className="pricing-description">
        Wählen Sie den Plan, der zu Ihnen passt. Ob kostenlos oder Premium – wir
        helfen Ihnen, Ihre Traumwohnung zu finden.
      </p>
      <div className="pricing-table">
        {/* Lite Card */}
        <div className="pricing-card">
          <h3>Lite</h3>
          <p className="price">Kostenlos</p>
          <ul className="features">
            <li>⏱️ Einfache Textgenerierung</li>
            <li>📋 Standard-Tipps</li>
            <li>🌍 Unterstützung auf Deutsch und Englisch</li>
          </ul>
          <button className="cta-button">Starten</button>
        </div>

        {/* Premium Card */}
        <div className="pricing-card premium">
          <h3>Premium</h3>
          <p className="price">9,95 €</p>
          <ul className="features">
            <li>🤖 Individuelle Texte mit optimiertem Modell</li>
            <li>📈 Experten-Tipps zur Wohnungssuche</li>
            <li>🔑 Geheimtipps und Zugang zu versteckten Portalen</li>
            <li>🤝 Persönliche Unterstützung für bis zu 14 Tage</li>
            <li>✨ Zugang zu unserem exklusiven Chatbot</li>
          </ul>
          <button className="cta-button premiumButton premium-button">
            Starten
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
