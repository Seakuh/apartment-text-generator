import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-overlay">
        <p>&copy; 2024 {t("footer.title")}</p>
        <ul>
          <li>
            <a href="/impressum">{t("footer.impressum")}</a>
          </li>
          <li>
            <a href="/datenschutz">{t("footer.privacy")}</a>
          </li>
          <li>
            <a href="/kontakt">{t("footer.contact")}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
