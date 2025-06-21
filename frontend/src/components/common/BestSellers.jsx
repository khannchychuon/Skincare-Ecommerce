"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/products?type=Best Seller",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // Needed for Sanctum auth
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch best seller products");
        }

        const data = await response.json();
        const productsList = Array.isArray(data.products) ? data.products : [];

        setProducts(productsList);
      } catch (err) {
        console.error("Error fetching best sellers:", err);
        setError("Could not load best sellers. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  const displayedProducts = showAll ? products : products.slice(0, 4);

  if (loading) {
    return (
      <div className="text-center py-6">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-pink-500 border-r-transparent" />
        <p className="mt-2 text-gray-600">Loading best sellers...</p>
      </div>
    );
  }

  return (
    <div className="section-container px-4 sm:px-6 lg:px-8 pb-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#2f4f4f]">Best Sellers</h2>
      </div>

      {error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500">No best sellers found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showDiscount={false}
            />
          ))}
        </div>
      )}

      {products.length > 4 && (
        <div className="text-center mt-6 mb-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="relative px-6 py-2 bg-[#2f4f4f] text-white rounded-lg hover:bg-[#3a5f5f] transition-colors group"
          >
            <span className="relative z-10 font-medium tracking-wide flex items-center justify-center gap-2">
              {showAll ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Show Less
                </>
              ) : (
                <>
                  View All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              )}
            </span>
            <span className="absolute inset-0 bg-[#3a5f5f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute top-0 left-0 w-full h-0.5 bg-white/30 group-hover:h-full group-hover:opacity-0 transition-all duration-500" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BestSellers;
