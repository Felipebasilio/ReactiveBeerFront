import "./AddProductButton.scss";
import { Button } from "@components";
import AddIcon from "@assets/AddIcon.svg";

function AddProductButton() {
  return (
    <div className="add-button">
      <Button>
        <a href="">
          <img
            className=""
            src={AddIcon}
            alt="My Icon"
            width={24}
            height={24}
          />
        </a>
      </Button>
    </div>
  );
};

export default AddProductButton;
