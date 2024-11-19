import React from "react";
import "./FeaturesSection.css";

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2>Warum unser Service?</h2>
      <ul>
        <li>⏱️ Zeitersparnis: Passende Texte in wenigen Sekunden.</li>
        <li>
          📈 Höhere Erfolgschancen: Überzeugen Sie Vermieter mit perfekt
          formulierten Bewerbungen.
        </li>
        <li>🌍 International geeignet: Deutsch und Englisch verfügbar.</li>
      </ul>
    </section>
  );
};

export default FeaturesSection;
