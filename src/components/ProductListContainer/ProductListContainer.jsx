import "./ProductListContainer.scss";
import { GreetingCard, ProductList } from "@components"; 

function ProductListContainer() {
  // const { products } = useProducts();
  return (
    <div className="d-flex flex-column product-listing-container">
      <GreetingCard />
      <p className="products-heading">Our Products</p>
      <ProductList />
    </div>
  );
};

export default ProductListContainer;