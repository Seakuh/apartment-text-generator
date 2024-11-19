import React from "react";
import "./EmailSection.css";

const EmailSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Button clicked!"); // Hier kommt die API-Logik
  };

  return (
    <section className="email-section">
      <h2>Bleiben Sie informiert!</h2>
      <p>
        Melden Sie sich an, um die neuesten Informationen zu Ihrer Wohnungssuche
        zu erhalten.
      </p>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="submitButton">
          Jetzt starten
        </button>
      </form>
    </section>
  );
};

export default EmailSection;
