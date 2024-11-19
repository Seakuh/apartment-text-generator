import React, { useState } from "react";
import "./EmailSection.css";

const EmailSection: React.FC<{ prompt: string }> = ({ prompt }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Prompt:", prompt);
    console.log("Email:", email);
    // Hier kann die API-Logik für die Verarbeitung der Daten hinzugefügt werden
  };

  return (
    <section className="email-section">
      <div className="email-content">
        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="email"
            placeholder="Ihre E-Mail-Adresse"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
            required
          />
          <button type="submit" className="submitButton">
            Jetzt starten
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
