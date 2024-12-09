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
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // JSON-Dateipfad
    },
  });

export default i18n;
