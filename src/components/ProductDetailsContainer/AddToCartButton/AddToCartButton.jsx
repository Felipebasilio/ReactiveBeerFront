import "./AddToCartButton.scss";
import { Button } from "@components";
import PropTypes from 'prop-types';

function AddToCartButton({ onClick }) {
  return (
    <div className="d-flex add-to-cart-button">
      <Button onClick={onClick} label="Add to cart" />
    </div>
  );
}

AddToCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddToCartButton;
