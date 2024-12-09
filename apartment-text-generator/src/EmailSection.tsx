import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./EmailSection.css";
import ProcessComponent from "./ProcessComponent/ProcessComponent";

const EmailSection: React.FC<{ prompt: string }> = ({ prompt }) => {
  const { t } = useTranslation(); // useTranslation-Hook für Übersetzungen
  const [email, setEmail] = useState("");
  const [processComponent, showProcessComponent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log(`Email: ${email}`);
      console.log(`Prompt: ${prompt}`);
      showProcessComponent(true);
    }
  };

  const handleCloseModal = () => {
    showProcessComponent(false);
  };

  return (
    <section className="email-section">
      <div className="email-content">
        <h2 className="email-prompt">{prompt}</h2>

        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="email"
            placeholder={t("emailSection.placeholder")} // Übersetzter Placeholder
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
            required
          />
          <button type="submit" className="submitButton">
            {t("emailSection.startButton")}
          </button>
        </form>
        <p className="email-section-description">
          {t("emailSection.description")}
        </p>
      </div>
      {processComponent && (
        <div className="modal-overlay">
          <div className="modal-wrapper">
            <ProcessComponent email={email} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default EmailSection;
