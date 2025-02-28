import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">{formatCurrency(product.price)}</p>
      <Link to={`/product/${product.id}`} className="view-details">
        <span role="img" aria-label="details">
          🔍
        </span>{" "}
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;