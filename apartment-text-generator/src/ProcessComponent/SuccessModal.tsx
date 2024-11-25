import React from "react";
import "./SuccessModal.css";

const SuccessModal: React.FC = () => {
  return (
    <div className="success-modal-overlay">
      <div className="success-modal-content">
        <span className="email-emoji">📧</span>
        <h2 className="success-title">Perfekt! 🎉</h2>
        <p className="success-message">
          Wir bereiten alles für dein neues Zuhause vor. 🏡 Unsere Roboter
          arbeiten gerade an deinem passgenauen Profil und suchen die relevanten
          Daten für dich.
        </p>
        <p className="success-instruction">
          👉 Schau in dein E-Mail-Postfach, um dein Paket abzuholen!
        </p>
        <a
          href="https://mail.google.com" // Standard-Link zu Gmail
          target="_blank"
          rel="noopener noreferrer"
          className="email-link"
        >
          📬 Zu meinen E-Mails
        </a>
        <div className="confetti"></div>
      </div>
    </div>
  );
};

export default SuccessModal;
