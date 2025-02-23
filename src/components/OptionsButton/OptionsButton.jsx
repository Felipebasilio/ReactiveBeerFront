import "./OptionsButton.scss";
import { Button } from "@components";
import DotsIcon from "@assets/DotsIcon.svg";

function OptionsButton() {
  return (
    <div className="options-button">
      <Button>
        <a href="">
          <img
            className=""
            src={DotsIcon}
            alt="My Icon"
            width={24}
            height={24}
          />
        </a>
      </Button>
    </div>
  );
};

export default OptionsButton;
