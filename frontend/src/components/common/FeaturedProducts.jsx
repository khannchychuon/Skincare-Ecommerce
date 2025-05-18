"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // In a real implementation, this would fetch from your Laravel API
        // const data = await fetchFeaturedProducts();

        // For now, we'll use mock data
        const mockData = [
          {
            id: 1,
            name: "Hydrating Facial Cleanser",
            category: "Cleanser",
            price: 24.99,
            image: "/placeholder.svg?height=400&width=300",
          },
          {
            id: 2,
            name: "Vitamin C Brightening Serum",
            category: "Serum",
            price: 39.99,
            image: "/placeholder.svg?height=400&width=300",
          },
          {
            id: 3,
            name: "Nourishing Night Cream",
            category: "Moisturizer",
            price: 34.99,
            image: "/placeholder.svg?height=400&width=300",
          },
          {
            id: 4,
            name: "Exfoliating Facial Scrub",
            category: "Exfoliator",
            price: 29.99,
            image: "/placeholder.svg?height=400&width=300",
          },
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

  return (
    <div className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover our most loved skincare essentials, formulated with clean
          ingredients for healthy, glowing skin.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
