import "./ProductSizeOption.scss";

function ProductSizeOption() {
  const select = () => {
    console.log("Selecting half barrel");
  };

  return (
    <a onClick={select} className="product-size-option">
      <p>Half Barrel</p>
    </a>
  );
} 

export default ProductSizeOption;