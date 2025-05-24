"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const mockData = [
          {
            id: 1,
            name: "CeraVe Facial Cleanser",
            category: "Cleanser",
            price: 26.99,
            image: "/images/products/hydrating-facial-cleanser.png",
          },
          {
            id: 2,
            name: "Balance Vitamin C Serum",
            category: "Serum",
            price: 11.99,
            image: "/images/products/vitamin-c-brightening-serum.webp",
          },
          {
            id: 3,
            name: "Nivea Night Cream",
            category: "Moisturizer",
            price: 11.19,
            image: "/images/products/nourishing-night-cream.avif",
          },
          {
            id: 4,
            name: "Skin1004 Sun Serum",
            category: "Sunscreens",
            price: 8.4,
            image: "/images/products/skin1004-sunserum.webp",
          },
          {
            id: 5,
            name: "Round Lab Cleanser",
            category: "Cleanser",
            price: 15.9,
            image: "/images/products/round-lab-cleanser.webp",
          },
          // ... (rest of your mock data)
        ];

        setProducts(mockData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="section-container">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-pink-400 border-r-transparent"></div>
          <p className="mt-2 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  const displayedProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className="section-container px-4 sm:px-6 lg:px-8 pb-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center">
          <div className="flex-grow border-t border-teal-500"></div>
          <h2 className="px-4 text-3xl font-bold text-[#2f4f4f] whitespace-nowrap">
            Trending Products
          </h2>
          <div className="flex-grow border-t border-teal-500"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length > 4 && (
        <div className="text-center mt-6 mb-4">
          {" "}
          {/* Added mb-16 */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-[#2f4f4f] text-white rounded-lg hover:bg-[#3a5f5f] transition-colors"
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

            {/* Hover effect elements */}
            <span className="absolute inset-0 bg-[#3a5f5f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute top-0 left-0 w-full h-0.5 bg-white/30 group-hover:h-full group-hover:opacity-0 transition-all duration-500"></span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
