import "./ProductSizeOption.scss";
import PropTypes from "prop-types";
import clsx from "clsx";

function ProductSizeOption({ size, isSelected, onSelect }) {
  return (
    <a
      onClick={onSelect}
      className={clsx("product-size-option", { selected: isSelected })}
    >
      <p>{size}</p>
    </a>
  );
}

ProductSizeOption.propTypes = {
  size: PropTypes.string,
  onSelect: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default ProductSizeOption;
