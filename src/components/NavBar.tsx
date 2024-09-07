import Icon from "@mdi/react";
import { mdiPen } from "@mdi/js";
import { mdiCog } from "@mdi/js";

const NavBar = () => {
  return (
    <footer className="footer">
      <div className="link">
        <div className="navLink active">
          <Icon path={mdiPen} size={1} />
        </div>
        <span>Home</span>
      </div>
      <div className="link">
        <div className="navLink">
          <Icon path={mdiCog} size={1} />
        </div>
        <span>Settings</span>
      </div>
    </footer>
  );
};

export default NavBar;
