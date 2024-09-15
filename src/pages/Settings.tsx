import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ModeToggle } from "@/components/mode-toggle";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="wrapper">
      <h1 className="todoSettings">⚙ {t("Settings")}</h1>
      <div className="settings">
        <div className="flex  justify-between items-center border-b-[1px] font-light p-5">
          <span>{t("Change the theme")}</span>
          <ModeToggle />
        </div>
        <div className="flex justify-between items-center border-b-[1px] font-light p-5 border-none">
          <span>{t("Language")}</span>
          <Select onValueChange={(value) => changeLanguage(value)}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder={t("LanguagePlaceholder")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ru">{t("Russian")}</SelectItem>
              <SelectItem value="en">{t("English")}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
