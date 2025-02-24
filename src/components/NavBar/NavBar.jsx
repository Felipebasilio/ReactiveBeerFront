import { UserAvatar, MenuButton, BackButton, OptionsButton } from "@components";
import "./NavBar.scss";

import { setNavBarState, setSelectedSkuProduct, setSelectedProduct } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(setNavBarState("productList"));
    dispatch(setSelectedSkuProduct(null));
    dispatch(setSelectedProduct(null));
    navigate("/");
  };

  const navBarState = useSelector((state) => state.app.navBarState);

  const navConfig = {
    productList: [<MenuButton key="menu" />, <UserAvatar key="avatar" />],
    productDetails: [<BackButton key="back" onClick={() => handleBack()}/>, <p key="nav-bar-page-title" className="page-title">Detail</p>,<OptionsButton key="avatar" />],
  };

  return (
    <div className="d-flex justify-between align-center w-100 nav-bar">
      {navConfig[navBarState]}
    </div>
  );
}

export default NavBar;
