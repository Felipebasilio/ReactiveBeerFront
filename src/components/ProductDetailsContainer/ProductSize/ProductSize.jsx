import "./ProductSize.scss";
import { ProductSizeOption } from "../";
import PropTypes from "prop-types";
import clsx from "clsx";
import { setSelectedSkuProduct } from "../../../store";
import { useSelector, useDispatch } from "react-redux";


function ProductSize({ className }) {
  const dispatch = useDispatch();

  const selectedProduct = useSelector((state) => state.app.selectedProduct);
  const selectedSkuProduct = useSelector((state) => state.app.selectedSkuProduct)

  const handleSelectSku = (selectedSkuProduct) => {
        dispatch(setSelectedSkuProduct(selectedSkuProduct));
  }

  return (
    <div className={clsx("d-flex flex-column gap-2 product-size", className)}>
      <h4 className="product-size-title">Size</h4>
      <div className="d-flex flex-wrap product-size-option-list">
        {selectedProduct.skus.map((sku) => (
          <ProductSizeOption
            key={sku.code}
            size={sku.name}
            isSelected={selectedSkuProduct?.skus?.code === sku.code}
            onSelect={() => handleSelectSku({...selectedProduct, skus: sku})}
          />
        ))}
      </div>
    </div>
  );
}

ProductSize.propTypes = {
  className: PropTypes.string,
  skus: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired, 
      name: PropTypes.string.isRequired, 
      stock: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default ProductSize;
