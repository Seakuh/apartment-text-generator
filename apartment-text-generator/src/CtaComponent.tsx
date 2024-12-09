import React from "react";
import { useTranslation } from "react-i18next";
import "./CtaComponent.css";

const CtaComponent: React.FC = () => {
  const { t } = useTranslation(); // Hook für Übersetzungen

  return (
    <div className="cta-container">
      <h2>{t("cta.title")}</h2>
      <p className="cta-description">
        <strong>{t("cta.descriptionHighlight")}</strong>
        <br />
        <br />
        {t("cta.description")}
      </p>
      <div className="extra-info">
        <h3>{t("cta.startNow")}</h3>
        <ul>
          <li>{t("cta.benefit1")}</li>
          <li>{t("cta.benefit2")}</li>
          <li>{t("cta.benefit3")}</li>
          <li>{t("cta.benefit4")}</li>
        </ul>
      </div>
    </div>
  );
};

export default CtaComponent;
