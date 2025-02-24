import "./ProductDescription.scss";
import PropTypes from "prop-types";
import { useState } from "react";
import clsx from "clsx";

function ProductDescription({
  className,
  description = "Selling imported beer in the US with nearly 60 million cases in annual sales, growing more than 15 million cases over the past 2 years. A full flavored Mexican lager consistently deliveringA full flavored Mexican lager consistently deliveringA full flavored Mexican lager consistently deliveringA full flavored Mexican lager consistently deliveringA full flavored Mexican lager consistently deliveringA full flavored Mexican lager consistently deliveringA full flavored Mexican lager consistently deliveringA full flavored Mexican lager consistently deliveringA full flavored Mexican lager consistently delivering",
}) {
  const maxLength = 200;
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedText =
    description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description;

  return (
    <div className={clsx("d-flex flex-column product-description", className)}>
      <h4 className="product-description-title">Description</h4>
      <p className="product-description-text">
        {isExpanded ? description : truncatedText}
        {description.length > maxLength && (
          <span
            className="read-more"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? " Read Less" : " Read More"}
          </span>
        )}
      </p>
    </div>
  );
}
ProductDescription.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
};

export default ProductDescription;
