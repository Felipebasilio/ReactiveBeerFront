import MenuButton from "@components/MenuButton/MenuButton";
import UserAvatar from "@components/UserAvatar/UserAvatar";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <dib className="d-flex justify-between w-100 nav-bar">
      <MenuButton />
      <UserAvatar />
    </dib>
  );
};

export default NavBar;
