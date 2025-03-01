import "./MenuButton.scss";
import { Button } from "@components";
import MenuIcon from "@assets/MenuIcon.svg";

function MenuButton() {
  return (
    <div className="menu-button">
      <Button>
        <a href="">
          <img
            className=""
            src={MenuIcon}
            alt="My Icon"
            width={24}
            height={24}
          />
        </a>
      </Button>
    </div>
  );
};

export default MenuButton;
