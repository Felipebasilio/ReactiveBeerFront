import "./ProductList.scss";
import { ProductCard } from "@components";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProduct, setNavBarState } from "../../store";
import useProducts from "../../hooks/useProducts";

function ProductList() {
  const { products, loading } = useProducts();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (loading) return <p>Loading products...</p>;

  const handleSelectProduct = (product) => {
    dispatch(setSelectedProduct(product));
    dispatch(setNavBarState("productDetails"));
    navigate(`/product/${product.id}-${product.brand.replace(/\s+/g, '-')}`);
  };

  return (
    <div className="d-grid gap-3 product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => handleSelectProduct(product)}
        />
      ))}
    </div>
  );
}

export default ProductList;
