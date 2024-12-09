import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "de", // Fallback-Sprache
    debug: true, // Debugging aktivieren
    backend: {
      loadPath: "locales/{{lng}}/translation.json", // Pfad zu den Übersetzungen
    },
    interpolation: {
      escapeValue: false, // Nicht nötig für React
    },
  });

export default i18n;
