"use client";

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-gray-900">
              <Link
                to={`/products/${product.id}`}
                className="hover:text-pink-400"
              >
                {product.name}
              </Link>
            </h3>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
          <span className="font-medium text-gray-900">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <div className="mt-4">
          <button
            onClick={() => addToCart(product)}
            className="w-full btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
