import "./BackButton.scss";
import { Button } from "@components";
import ArrowBackIcon from "@assets/ArrowBackIcon.svg";

function BackButton() {
  return (
    <div className="back-button">
      <Button>
        <a href="">
          <img
            className=""
            src={ArrowBackIcon}
            alt="My Icon"
            width={24}
            height={24}
          />
        </a>
      </Button>
    </div>
  );
};

export default BackButton;
