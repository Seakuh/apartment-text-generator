import React from "react";
import { useTranslation } from "react-i18next";
import "./FeaturesSection.css";

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="features-section">
      <h2>{t("features.title")}</h2>
      <p>{t("features.description")}</p>
      <ul>
        {t("features.items", { returnObjects: true }).map(
          (item: string, index: number) => (
            <li key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              {item}
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default FeaturesSection;
