import React from "react";
import "./PricingSection.css";

const PricingSection: React.FC = () => {
  return (
    <section className="pricing-section">
      <h2>Preise</h2>
      <div className="pricing-table">
        <div className="pricing-card">
          <h3>Lite</h3>
          <p>Kostenlos</p>
          <p>Einfache Textgenerierung</p>
        </div>
        <div className="pricing-card premium">
          <h3>Premium</h3>
          <p>9,95 €</p>
          <p>Individuelle Texte mit optimiertem Modell</p>
          <button className="cta-button">Jetzt kaufen</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
