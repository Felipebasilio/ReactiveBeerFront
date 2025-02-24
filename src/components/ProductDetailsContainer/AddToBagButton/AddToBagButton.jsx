import "./AddToBagButton.scss";
import BagIcon from "@assets/BagIcon.svg";
import { Button } from "@components";
import PropTypes from "prop-types";

function AddToBagButton({ onClick }) {
  return (
    <div className="d-flex add-to-bag-button">
      <Button onClick={onClick}>
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
}

AddToBagButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddToBagButton;
