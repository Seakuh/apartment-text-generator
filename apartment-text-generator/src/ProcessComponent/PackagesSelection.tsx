import React, { useState } from "react";
import { packages } from "./packages";
import "./PackageSelection.css";

const PackageSelection: React.FC<{
  onPackageSelect: (packageId: string) => void;
}> = ({ onPackageSelect }) => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    onPackageSelect(packageId); // Übergibt die Auswahl an den Parent
  };

  return (
    <div className="package-container">
      <h2 className="package-title">Wählen Sie Ihr Paket</h2>
      <div className="package-grid">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`package-card ${pkg.id} ${
              selectedPackage === pkg.id ? "selected" : ""
            }`}
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
  );
};

export default PackageSelection;
