
import "./AddToBagButton.scss";
import BagIcon from "@assets/BagIcon.svg"
import { Button } from "@components";

function AddToBagButton() {
  return (
    <div className="d-flex add-to-bag-button">
      <Button>
        <a href="">
          <img
            className=""
            src={BagIcon}
            alt="My Icon"
            width={24}
            height={24}
          />
        </a>
      </Button>
    </div>
  );
};

export default AddToBagButton;
