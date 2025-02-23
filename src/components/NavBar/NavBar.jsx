import { UserAvatar, MenuButton, BackButton, OptionsButton } from "@components";
import PropTypes from "prop-types";
import "./NavBar.scss";

function NavBar({ pageType = "productDetails" }) {
  const navConfig = {
    productList: [<MenuButton key="menu" />, <UserAvatar key="avatar" />],
    productDetails: [<BackButton key="back" />, <OptionsButton key="avatar" />],
  };

  return (
    <div className="d-flex justify-between w-100 nav-bar">
      {navConfig[pageType] || navConfig.productList}
    </div>
  );
}

NavBar.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default NavBar;
