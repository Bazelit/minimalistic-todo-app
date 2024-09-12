import Icon from "@mdi/react";
import { mdiPen } from "@mdi/js";
import { mdiCog } from "@mdi/js";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <footer className="footer bg-background">
      <div className="link">
        <NavLink to="" className="navLink">
          <Icon path={mdiPen} size={1} />
        </NavLink>
        <span>Заметки</span>
      </div>
      <div className="link">
        <NavLink to="settings" className="navLink">
          <Icon path={mdiCog} size={1} />
        </NavLink>
        <span>Настройки</span>
      </div>
    </footer>
  );
};

export default NavBar;
