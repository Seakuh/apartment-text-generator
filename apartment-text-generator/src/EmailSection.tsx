import React, { useState } from "react";
import "./EmailSection.css";
import ProcessComponent from "./ProcessComponent/ProcessComponent";

const EmailSection: React.FC<{ prompt: string }> = ({ prompt }) => {
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
