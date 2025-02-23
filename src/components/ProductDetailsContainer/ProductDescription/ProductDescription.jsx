import "./ProductDescription.scss";
import PropTypes from 'prop-types';
import clsx from 'clsx';

function ProductDescription({ className }) {
  return (
    <div className={clsx("d-flex flex-column product-description", className)}>
      <h4 className="product-description-title">Description</h4>
      <p className="product-description-text">Selling imported beer in the US with nearly 60 million cases in annual sales, growing more than 15 million cases over the past 2 years. A full flavored Mexican lager consistently delivering ... Read more</p>
    </div>
  )
}
ProductDescription.propTypes = {
  className: PropTypes.string,
};

export default ProductDescription;