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
    "Cleansers",
    "Moisturizers",
    "Serums",
    "Masks",
    "Exfoliators",
    "Toners",
    "Eye Care",
  ];

  useEffect(() => {
    const getProducts = async () => {
      try {
        // In a real implementation, this would fetch from your Laravel API
        // const data = await fetchProducts(categoryFilter);

        // For now, we'll use mock data
        const mockData = [
          {
            id: 1,
            name: "Hydrating Facial Cleanser",
            category: "Cleansers",
            price: 24.99,
            image: "/placeholder.svg?height=400&width=300",
          },
          {
            id: 2,
            name: "Vitamin C Brightening Serum",
            category: "Serums",
            price: 39.99,
            image: "/placeholder.svg?height=400&width=300",
          },
          {
            id: 3,
            name: "Nourishing Night Cream",
            category: "Moisturizers",
            price: 34.99,
            image: "/placeholder.svg?height=400&width=300",
          },
          {
            id: 4,
            name: "Exfoliating Facial Scrub",
            category: "Exfoliators",
            price: 29.99,
            image: "/placeholder.svg?height=400&width=300",
          },
          {
            id: 5,
            name: "Hydrating Face Mask",
            category: "Masks",
            price: 19.99,
            image: "/placeholder.svg?height=400&width=300",
          },
          {
            id: 6,
            name: "Balancing Toner",
            category: "Toners",
            price: 22.99,
            image: "/placeholder.svg?height=400&width=300",
          },
          {
            id: 7,
            name: "Brightening Eye Cream",
            category: "Eye Care",
            price: 32.99,
            image: "/placeholder.svg?height=400&width=300",
          },
          {
            id: 8,
            name: "Daily Moisturizer SPF 30",
            category: "Moisturizers",
            price: 28.99,
            image: "/placeholder.svg?height=400&width=300",
          },
        ];

        // Filter products if category is specified
        const filteredProducts =
          categoryFilter && categoryFilter !== "All"
            ? mockData.filter(
                (product) =>
                  product.category.toLowerCase() ===
                  categoryFilter.toLowerCase()
              )
            : mockData;

        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
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
    <div className="section-container">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
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
                : `/products?category=${category}`
            }
            className={`px-4 py-2 rounded-full text-sm ${
              (category === "All" && !categoryFilter) ||
              (categoryFilter &&
                category.toLowerCase() === categoryFilter.toLowerCase())
                ? "bg-pink-400 text-white"
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
