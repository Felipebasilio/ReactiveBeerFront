import "./ProductDetailsContainer.scss";
import { MoneyText } from "@components";
import { ProductDescription, ProductSize, AddToBagButton, AddToCartButton } from "./";
import Beer from "@assets/beer.svg";

function ProductDetailsContainer() {
  // const { products } = useProducts();
  return (
    <div className="d-flex flex-column justify-center align-center gap-2 product-details-container">
      <img className="product-image" src={Beer} alt="" />
      <div className="d-flex flex-column product-informations">
        <div className="d-flex justify-between product-title-stock-price">
          <div className="d-flex gap-1 flex-column product-title-stock">
            <h3 className="product-title">Product title</h3>
            <p className="product-stock">Origin: Import | Stock: 456</p>
          </div>
          <div className="product-price">
            <MoneyText value={181.0} />
          </div>
        </div>
        <ProductDescription className="mb-4" />
        <ProductSize />
        <div className="d-flex gap-4 buy-product-container">
          <AddToBagButton />
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsContainer;
