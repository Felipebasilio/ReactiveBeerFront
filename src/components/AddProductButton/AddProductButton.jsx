import "./AddProductButton.scss";
import { Button } from "@components";
import React from "react";
import AddIcon from "@assets/AddIcon.svg";
import PropTypes from 'prop-types';

function AddProductButton({ onClick }) {
  return (
    <div className="add-button">
      <Button onClick={onClick}>
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
}

AddProductButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddProductButton;
