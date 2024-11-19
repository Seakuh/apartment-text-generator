import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Apartment Text Generator. Alle Rechte vorbehalten.</p>
      <ul>
        <li>
          <a href="/impressum">Impressum</a>
        </li>
        <li>
          <a href="/datenschutz">Datenschutz</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
