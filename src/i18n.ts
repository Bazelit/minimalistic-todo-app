import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Подключение плагина для загрузки переводов
  .use(LanguageDetector) // Определение языка браузера
  .use(initReactI18next) // Интеграция с React
  .init({
    fallbackLng: "en", // Язык по умолчанию
    debug: true, // Включение режима отладки
    interpolation: {
      escapeValue: false, // Отключение экранирования HTML (необходимо для React)
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Путь к файлам переводов
    },
  });

export default i18n;
