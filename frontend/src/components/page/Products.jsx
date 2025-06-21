"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../common/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const brandFilter = searchParams.get("brand");

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
        const queryParams = new URLSearchParams();
        if (categoryFilter && categoryFilter !== "All") {
          queryParams.append("category", categoryFilter);
        }
        if (brandFilter) {
          queryParams.append("brand", brandFilter);
        }
        if ([...queryParams].length > 0) {
          url += `?${queryParams.toString()}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();

        setProducts(data.products || data); // fallback if data is just an array
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [categoryFilter, brandFilter]);

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
    <div className="container mx-auto px-4">
      <section className="px-4  md:px-8  lg:px-16 lg:py-12 ">
        <div className="max-w-7xl mx-auto mb-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#2f4f4f]">Our Products</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Discover our range of natural skincare products designed to
              nourish and enhance your skin's natural beauty.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const url = new URLSearchParams();
              if (category !== "All") {
                url.append("category", category);
              }
              if (brandFilter) {
                url.append("brand", brandFilter); // keep brand filter
              }
              return (
                <a
                  key={category}
                  href={`/products?${url.toString()}`}
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
              );
            })}
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No products found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
