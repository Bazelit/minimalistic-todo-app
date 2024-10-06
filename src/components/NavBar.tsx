import Icon from "@mdi/react";
import { mdiPen } from "@mdi/js";
import { mdiCog } from "@mdi/js";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-background border-t">
      <div className="link">
        <NavLink to="/" className="navLink">
          <Icon path={mdiPen} size={1} />
        </NavLink>
        <span>{t("Todos")}</span>
      </div>
      <div className="link">
        <NavLink to="settings" className="navLink">
          <Icon path={mdiCog} size={1} />
        </NavLink>
        <span>{t("Settings")}</span>
      </div>
    </footer>
  );
};

export default NavBar;
