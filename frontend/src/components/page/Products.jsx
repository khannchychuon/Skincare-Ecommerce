"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../common/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const categories = [
    "All",
    "Cleanser",
    "Moisturizer",
    "Serum",
    "Sunscreens",
    "Mask",
    "Exfoliator",
    "Toner",
    "Haircare",
    "Lotion",
    "Makeup",
    "Bodycare",
  ];

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        let url = "http://127.0.0.1:8000/api/products";
        if (categoryFilter && categoryFilter !== "All") {
          url += `?category=${encodeURIComponent(categoryFilter)}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();

        // Assume your API returns an array of products in data.products
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [categoryFilter]);

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
    <div className="section-container px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#2f4f4f]">Our Products</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover our range of natural skincare products designed to nourish
          and enhance your skin's natural beauty.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <a
            key={category}
            href={
              category === "All"
                ? "/products"
                : `/products?category=${encodeURIComponent(category)}`
            }
            className={`px-4 py-2 rounded-full text-sm ${
              (category === "All" && !categoryFilter) ||
              (categoryFilter &&
                category.toLowerCase() === categoryFilter.toLowerCase())
                ? "bg-teal-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </a>
        ))}
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
