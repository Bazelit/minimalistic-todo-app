import { ModeToggle } from "@/components/mode-toggle";
import { useTranslation } from "react-i18next";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import LanguageSwitching from "@/components/LanguageSwitching";
import GithubLink from "@/components/GithubLink";

const Settings = () => {
  const { t } = useTranslation();

  return (
    <div className="wrapper">
      <h1 className="todoSettings">⚙ {t("Settings")}</h1>
      <div className="settings">
        <div className="flex justify-between items-center border-b-[1px] font-light p-5">
          <LanguageSwitching />
        </div>
        <div className="flex justify-between items-center border-b-[1px] font-light p-5">
          <ModeToggle />
        </div>
        <div className="flex justify-between items-center border-b-[1px] font-light p-5">
          <ThemeCustomizer />
        </div>
        <div className="flex justify-between items-center font-light p-5">
          <GithubLink />
        </div>
      </div>
    </div>
  );
};

export default Settings;
