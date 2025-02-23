import "./ProductCard.scss";
import { AddProductButton, MoneyText } from "@components";
import Beer from "@assets/beer.svg";
import StarIcon from "@assets/StarIcon.svg";

function ProductCard() {
  return (
    <div className="d-flex flex-column justify-center align-center product-card">
      <h3>Product Name</h3>
      <img src={Beer} alt="Product Image" />
      <div className="d-flex flex-column product-price-and-rate">
        <div className="d-flex gap-1 product-rate">
          <img src={StarIcon} alt="" />
          <p className="product-rate-text">4.9</p>
        </div>
        <div className="product-price">
          <p>
            <MoneyText value={49.99}/>
          </p>
        </div>
        <AddProductButton />
      </div>
    </div>
  );
}

export default ProductCard;
