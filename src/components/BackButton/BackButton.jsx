import "./BackButton.scss";
import { Button } from "@components";
import ArrowBackIcon from "@assets/ArrowBackIcon.svg";
import PropTypes from 'prop-types';

function BackButton({ onClick }) {
  return (
    <div className="back-button">
      <Button onClick={onClick}>
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
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackButton;
