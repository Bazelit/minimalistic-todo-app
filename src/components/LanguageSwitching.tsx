import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

const LanguageSwitching = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <span>{t("Language")}</span>
      <Select onValueChange={(value) => changeLanguage(value)}>
        <SelectTrigger className="w-[130px]">
          <SelectValue placeholder={t("LanguagePlaceholder")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem className="cursor-pointer" value="ru">
            {t("Russian")}
          </SelectItem>
          <SelectItem className="cursor-pointer" value="en">
            {t("English")}
          </SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default LanguageSwitching;
