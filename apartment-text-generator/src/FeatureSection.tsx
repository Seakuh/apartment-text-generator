import React from "react";
import "./FeaturesSection.css";

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2>Warum unser Service? 🏠</h2>
      <p>
        Wir sind hier, um Ihnen zu helfen, Ihre Traumwohnung zu finden – mit
        persönlicher Unterstützung und intelligenten Tools.
      </p>
      <ul>
        <li>
          ⏱️ <strong>Zeitersparnis:</strong> Passende Texte in wenigen Sekunden.
        </li>
        <li>
          📈 <strong>Höhere Erfolgschancen:</strong> Überzeugen Sie Vermieter
          mit perfekt formulierten Bewerbungen.
        </li>
        <li>
          🌍 <strong>International geeignet:</strong> Deutsch und Englisch
          verfügbar.
        </li>
        <li>
          🏢 <strong>Institutionelle Hilfe:</strong> Unterstützung für Kurz- und
          Langzeitmieter durch relevante Institutionen.
        </li>
        <li>
          🔑 <strong>Passende Portale & Geheimtipps:</strong> Zugang zu den
          besten Plattformen und versteckten Wohnungsangeboten.
        </li>
        <li>
          🤖 <strong>Zugang zum Chatbot:</strong> Ihr digitaler Assistent, der
          Ihnen rund um die Uhr bei der Wohnungssuche hilft.
        </li>
        <li>
          🤝 <strong>Persönliche Unterstützung:</strong> Bis zu 14 Tage
          intensive Betreuung, um Ihre Suche erfolgreich zu machen.
        </li>
      </ul>
    </section>
  );
};

export default FeaturesSection;
