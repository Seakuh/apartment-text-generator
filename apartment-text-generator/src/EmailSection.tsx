import React, { useState } from "react";
import "./EmailSection.css";
import PackageSelection from "./PackagesSelection/PackagesSelection";

const EmailSection: React.FC<{ prompt: string }> = ({ prompt }) => {
  const [email, setEmail] = useState("");
  const [showPackages, setShowPackages] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log(email);
      
      setShowPackages(true);
    }
  };

  const handleCloseModal = () => {
    setShowPackages(false);
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
      {showPackages && <PackageSelection email={email} onClose={handleCloseModal} />}
    </section>
  );
};

export default EmailSection;
