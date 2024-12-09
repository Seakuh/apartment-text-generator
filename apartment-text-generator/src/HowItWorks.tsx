import React from "react";
import { useTranslation } from "react-i18next";
import "./HowItWorks.css";

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="how-it-works">
      <h2>{t("howItWorks.title")}</h2>
      <p>{t("howItWorks.description")}</p>
      <div className="steps">
        <div className="step">
          <span className="step-number">1️⃣</span>
          <h3>{t("step1.title")}</h3>
          <p>{t("step1.description")}</p>
        </div>
        <div className="step">
          <span className="step-number">2️⃣</span>
          <h3>{t("step2.title")}</h3>
          <p>{t("step2.description")}</p>
        </div>
        <div className="step">
          <span className="step-number">3️⃣</span>
          <h3>{t("step3.title")}</h3>
          <p>{t("step3.description")}</p>
        </div>
      </div>
      <div className="extra-info">
        <h3>{t("extraInfo.title")}</h3>
        <ul>
          <li>{t("extraInfo.features.1")}</li>
          <li>{t("extraInfo.features.2")}</li>
          <li>{t("extraInfo.features.3")}</li>
          <li>{t("extraInfo.features.4")}</li>
          <li>{t("extraInfo.features.5")}</li>
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;
