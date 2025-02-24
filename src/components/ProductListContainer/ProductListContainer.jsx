import "./ProductListContainer.scss";
import { GreetingCard, ProductList } from "@components";
import { motion } from "framer-motion";

function ProductListContainer() {
  return (
    <motion.div
      className="product-list-container"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="d-flex flex-column product-listing-container">
        <GreetingCard />
        <p className="products-heading">Our Products</p>
        <ProductList />
      </div>
    </motion.div>
  );
}

export default ProductListContainer;
