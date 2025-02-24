import "./ProductCard.scss";
import PropTypes from "prop-types";
import { AddProductButton, MoneyText } from "@components";
import StarIcon from "@assets/StarIcon.svg";

function ProductCard({ product, onClick }) {
  return (
    <div className="d-flex flex-column justify-center align-center product-card">
      <h3>{product.brand}</h3>
      <img src={product.image} alt="Product Image" className="product-card-image"/>
      <div className="d-flex flex-column w-100 product-price-and-rate">
        <div className="d-flex gap-1 product-rate">
          <img src={StarIcon} alt="" />
          <p className="product-rate-text">{product.abv.slice(0, -1)}</p>
        </div>
        <div className="product-price">
          <MoneyText value={product.skus[0].price / 100} />
        </div>
        <AddProductButton onClick={onClick} />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    substyle: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    information: PropTypes.string.isRequired,
    skus: PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
