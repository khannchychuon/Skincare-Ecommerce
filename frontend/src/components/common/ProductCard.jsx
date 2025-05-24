"use client";

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product, showDiscount = false }) => {
  const { addToCart } = useCart();

  // Calculate discount percentage if discountPrice exists
  const discountPercentage = product.discountPrice
    ? Math.round((1 - product.discountPrice / product.price) * 100)
    : 0;

  return (
    <div className="w-full border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white transform hover:-translate-y-1 relative">
      {/* Discount Badge */}
      {showDiscount && product.discountPrice && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          {discountPercentage}% OFF
        </div>
      )}

      {/* Image with Link */}
      <Link to={`/products/${product.id}`} className="block group">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image || "/images/placeholder-product.png"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = "/images/placeholder-product.png";
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-800 text-base leading-tight line-clamp-2">
              <Link
                to={`/products/${product.id}`}
                className="hover:text-teal-500 transition-colors"
              >
                {product.name}
              </Link>
            </h3>
            <p className="text-sm text-gray-500 mt-1 truncate">
              {product.category}
            </p>
          </div>

          {/* Price Display */}
          <div className="flex flex-col items-end">
            {showDiscount && product.discountPrice ? (
              <>
                <span className="font-bold text-red-500 text-base whitespace-nowrap">
                  ${product.discountPrice.toFixed(2)}
                </span>
                <span className="text-xs text-gray-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="font-bold text-gray-900 text-base whitespace-nowrap">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="w-full py-2.5 bg-gradient-to-r from-[#2f4f4f] to-teal-700 hover:from-[#3a5f5f] hover:to-teal-800 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
