import React from "react";
import { packages } from "./packages";
import "./PackageSelection.css";

const PackageSelection: React.FC<{
  email: string;
  onClose: () => void;
}> = ({ email, onClose }) => {
  const handlePackageSelect = (packageId: string) => {
    console.log(`Selected Package: ${packageId}`);
    console.log(`User Email: ${email}`);
    // Weiterleitung oder API-Aufruf
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Verhindert, dass ein Klick auf den Modal den Overlay schließt
      >
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2 className="package-title">Wählen Sie Ihr Paket</h2>
        <div className="package-grid">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`package-card ${pkg.id}`} // Dynamische Klassen
              onClick={() => handlePackageSelect(pkg.id)}
            >
              <h3>{pkg.name}</h3>
              <p className="package-price">{pkg.price}</p>
              <ul>
                {pkg.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <button className="select-button">Plan wählen</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageSelection;
