import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./de";
import en from "./en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: "de", // Standardsprache
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
