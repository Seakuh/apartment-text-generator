import React from "react";
import "./CtaComponent.css";

const CtaComponent: React.FC = () => {
  return (
    <div className="cta-container">
      <h2>Finden Dein neues Zuhause 🏠</h2>
      <p className="cta-description">
        <strong>schnell und unkompliziert</strong>
        <br />
        <br />
        Wir verstehen, wie schwer es aktuell ist, eine Wohnung zu finden. Unsere
        Plattform hilft Ihnen dabei, gezielt nach passenden Angeboten zu suchen
        und direkte Verbindungen zu Vermietern herzustellen.
      </p>
      <div className="extra-info">
        <h3>Starte jetzt</h3>
        <ul>
          <li>Einfach anmelden und direkt loslegen</li>
          <li>Mit dem passenden Packet für Dich</li>
          <li>Unterstützung bei jedem Schritt</li>
        </ul>
      </div>
    </div>
  );
};

export default CtaComponent;
