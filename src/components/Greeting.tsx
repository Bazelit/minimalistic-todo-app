import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Greeting = () => {
  const [timeOfDay, setTimeOfDay] = useState<string>("");
  const { t } = useTranslation();

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 6 && currentTime < 12) {
      setTimeOfDay(`🌅 ${t("Good morning!")}`);
    } else if (currentTime >= 12 && currentTime < 18) {
      setTimeOfDay(`☀️ ${t("Good afternoon!")}`);
    } else if (currentTime >= 18 && currentTime < 24) {
      setTimeOfDay(`🌙 ${t("Good evening!")}`);
    } else {
      setTimeOfDay(`🌃 ${t("Goodnight!")}`);
    }
  }, []);

  return <p className="greeting">{timeOfDay}</p>;
};

export default Greeting;
