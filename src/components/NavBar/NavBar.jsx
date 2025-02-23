import { UserAvatar, MenuButton } from "@components";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="d-flex justify-between w-100 nav-bar">
      <MenuButton />
      <UserAvatar />
    </div>
  );
};

export default NavBar;
