import "./ProductSize.scss";
import { ProductSizeOption } from "../";
import PropTypes from "prop-types";
import clsx from "clsx";

function ProductSize({ className }) {
  return (
    <div className={clsx("d-flex flex-column gap-2 product-size", className)}>
      <h4 className="product-size-title">Size</h4>
      <div className="d-flex flex-wrap product-size-option-list">
        <ProductSizeOption />
        <ProductSizeOption />
        <ProductSizeOption />
      </div>
    </div>
  );
}
ProductSize.propTypes = {
  className: PropTypes.string,
};

export default ProductSize;
