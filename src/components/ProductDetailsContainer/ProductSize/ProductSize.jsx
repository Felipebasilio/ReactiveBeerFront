import "./ProductSize.scss";
import { ProductSizeOption } from "../";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useState } from "react";

function ProductSize({ className, sizes = ["teste", "outro teste"] }) {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className={clsx("d-flex flex-column gap-2 product-size", className)}>
      <h4 className="product-size-title">Size</h4>
      <div className="d-flex flex-wrap product-size-option-list">
        {sizes.map((size) => (
          <ProductSizeOption
            key={size}
            size={size}
            isSelected={selectedSize === size}
            onSelect={() => setSelectedSize(size)}
          />
        ))}
      </div>
    </div>
  );
}

ProductSize.propTypes = {
  className: PropTypes.string,
  sizes: PropTypes.arrayOf(PropTypes.string),
};

export default ProductSize;
