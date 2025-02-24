import "./ProductDetailsContainer.scss";
import { MoneyText } from "@components";
import {
  ProductDescription,
  ProductSize,
  AddToBagButton,
  AddToCartButton,
} from "./";

import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSelectedProduct } from "../../store";

function ProductDetailsContainer() {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.app.selectedProduct);
  const selectedSkuProduct = useSelector(
    (state) => state.app.selectedSkuProduct
  ) || { ...selectedProduct, skus: selectedProduct.skus[0] };

  const handleBuyProduct = (product) => {
    alert(JSON.stringify(product, null, 2) + " added to cart");
  };

  useEffect(() => {
    if (!selectedProduct) return;

    const interval = setInterval(async () => {
      try {
        const updatedSkus = await Promise.all(
          selectedProduct.skus.map(async (sku) => {
            const response = await fetch(
              `http://localhost:3333/stock-price/${sku.code}`
            );
            if (!response.ok) return sku;

            const updatedData = await response.json();
            return {
              ...sku,
              stock: updatedData.stock,
              price: updatedData.price / 100,
            };
          })
        );

        dispatch(setSelectedProduct({ ...selectedProduct, skus: updatedSkus }));
      } catch (error) {
        console.error("Error updating stock and price:", error);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedProduct, dispatch]);


  if (!selectedSkuProduct) return <p>Product not found.</p>;

  return (
    <motion.div
      className="product-details-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="d-flex flex-column justify-center align-center gap-2 product-details-container">
        <img className="product-image" src={selectedSkuProduct.image} alt="" />
        <div className="d-flex flex-column product-informations">
          <div className="d-flex justify-between product-title-stock-price">
            <div className="d-flex gap-1 flex-column product-title-stock">
              <h3 className="product-title">{selectedSkuProduct.brand}</h3>
              <p className="product-stock">
                Origin: {selectedSkuProduct.origin} | Stock: {selectedSkuProduct.skus.stock}
              </p>
            </div>
            <div className="product-price">
              <MoneyText value={selectedSkuProduct.skus.price / 100} />
            </div>
          </div>
          <ProductDescription className="mb-4" description={selectedSkuProduct.information}/>
          <ProductSize />
          <div className="d-flex gap-4 buy-product-container">
            <AddToBagButton onClick={() => handleBuyProduct(selectedSkuProduct)}/>
            <AddToCartButton onClick={() => handleBuyProduct(selectedSkuProduct)}/>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductDetailsContainer;
