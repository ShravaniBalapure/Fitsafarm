import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to FitSafar": "Welcome to FitSafar",
      "Your Fitness Companion": "Your Fitness Companion",
      "Contact": "Contact",
      "Workouts": "Workouts",
      "Pricing": "Pricing",
    },
  },
  hi: {
    translation: {
      "Welcome to FitSafar": "फिटसफर में आपका स्वागत है",
      "Your Fitness Companion": "आपका फिटनेस साथी",
      "Contact": "संपर्क करें",
      "Workouts": "वर्कआउट्स",
      "Pricing": "मूल्य निर्धारण",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", 
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
