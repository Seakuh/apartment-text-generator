import React from "react";
import { useTranslation } from "react-i18next";
import "./PricingSection.css";
import { packages } from "./ProcessComponent/packages";

const PricingSection: React.FC = () => {
  const { t } = useTranslation();

  const handleStart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrollen zum Anfang der Seite
  };

  return (
    <section className="pricing-section">
      <h2>{t("pricing.title")}</h2>
      <p className="pricing-description">{t("pricing.description")}</p>
      <div className="pricing-table">
        {packages.map((pkg) => (
          <div className="pricing-card" key={pkg.id}>
            <h3>{t(`packages.${pkg.id}.name`)}</h3>
            <p className="price">{t(`packages.${pkg.id}.price`)}</p>
            <ul className="features">
              {pkg.benefits.map((benefit, index) => (
                <li key={index}>{t(benefit)}</li>
              ))}
            </ul>
            <button
              className={`cta-button ${
                pkg.id === "business" ? "premium-button" : ""
              }`}
              onClick={handleStart}
            >
              {t("pricing.startButton")}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
