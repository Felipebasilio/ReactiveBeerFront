import { UserAvatar, MenuButton, BackButton, OptionsButton } from "@components";
import PropTypes from "prop-types";
import "./NavBar.scss";

function NavBar({ pageType = "productDetails" }) {
  const navConfig = {
    productList: [<MenuButton key="menu" />, <UserAvatar key="avatar" />],
    productDetails: [<BackButton key="back" />, <p key="nav-bar-page-title" className="page-title">Detail</p>,<OptionsButton key="avatar" />],
  };

  return (
    <div className="d-flex justify-between align-center w-100 nav-bar">
      {navConfig[pageType] || navConfig.productList}
    </div>
  );
}

NavBar.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default NavBar;
