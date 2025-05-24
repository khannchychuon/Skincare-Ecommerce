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
    "Hair Product",
    "Lotion",
    "Makeup",
    "Body Scrub",
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
            price: 10.19,
            image: "/images/products/nourishing-night-cream.avif",
          },
          {
            id: 4,
            name: "Innovist Facial Scrub",
            category: "Exfoliator",
            price: 12.9,
            image: "/images/products/exfoliating-facial-scrub.webp",
          },
          {
            id: 5,
            name: "Laneige Face Mask",
            category: "Mask",
            price: 32.0,
            image: "/images/products/hydrating-face-mask.webp",
          },
          {
            id: 6,
            name: "Balancing Toner",
            category: "Toner",
            price: 18.99,
            image: "/images/products/balancing-toner.webp",
          },
          {
            id: 7,
            name: "Brightening Eye Cream",
            category: "Eye Care",
            price: 12.0,
            image: "/images/products/brightening-eye-cream.webp",
          },
          {
            id: 8,
            name: "Cetaphil Moisturizer SPF",
            category: "Moisturizer",
            price: 24.89,
            image: "/images/products/daily-moisturizer-spf30.jpeg",
          },
          {
            id: 9,
            name: "Cosrx Gel Cleanser",
            category: "Cleanser",
            price: 9.0,
            image: "/images/products/cosrx-gel-cleanser.webp",
          },
          {
            id: 10,
            name: "Cosrx Sunscreen",
            category: "Sunscreens",
            price: 6.9,
            image: "/images/products/cosrx-sunscreen.webp",
          },
          {
            id: 11,
            name: "Dove Scrub",
            category: "Body Scrub",
            price: 7.99,
            image: "/images/products/dove-scrub.avif",
          },
          {
            id: 12,
            name: "Pimple Patches",
            category: "Makeup",
            price: 8.34,
            image: "/images/products/pimple-patches.jpg",
          },
          {
            id: 13,
            name: "3CE Blush",
            category: "Makeup",
            price: 23.0,
            image: "/images/products/3ec-blush.webp",
          },
          {
            id: 14,
            name: "Shampoo for Color Hair",
            category: "Hair Product",
            price: 2.86,
            image: "/images/products/dove-hair-color-protect.jpg",
          },
          {
            id: 15,
            name: "Brightening Serum",
            category: "Serum",
            price: 17.2,
            image: "/images/products/jumiso-brightening-serum.webp",
          },
          {
            id: 16,
            name: "Star Face",
            category: "Makeup",
            price: 10.99,
            image: "/images/products/star-face.avif",
          },
          {
            id: 17,
            name: "Skin1004 Sun Serum",
            category: "Sunscreens",
            price: 8.4,
            image: "/images/products/skin1004-sunserum.webp",
          },
          {
            id: 18,
            name: "Round Lab Toner",
            category: "Toner",
            price: 9.99,
            image: "/images/products/round-lab-toner.webp",
          },
          {
            id: 19,
            name: "Round Lab Cleanser",
            category: "Cleanser",
            price: 15.9,
            image: "/images/products/round-lab-cleanser.webp",
          },
          {
            id: 20,
            name: "Cerave Face Exfoliator",
            category: "Exfoliator",
            price: 17.2,
            image: "/images/products/cerave-face-exfoliator.webp",
          },
          {
            id: 21,
            name: "Dove Hair Conditioner",
            category: "Hair Product",
            price: 2.5,
            image: "/images/products/dove-hair-conditioner.webp",
          },
          {
            id: 22,
            name: "Round Lab Face Mask",
            category: "Mask",
            price: 4.5,
            image: "/images/products/round-lab-face-mask.jpg",
          },
          {
            id: 23,
            name: "Tree Hut Body Scrub",
            category: "Body Scrub",
            price: 8.94,
            image: "/images/products/tree-hut-body-scrub.webp",
          },
          {
            id: 24,
            name: "Nivea Aloe Vera Lotion",
            category: "Lotion",
            price: 10.5,
            image: "/images/products/nivea-aloe-vera-lotion.webp",
          },
          {
            id: 25,
            name: "Vaseline Lotion",
            category: "Lotion",
            price: 8.82,
            image: "/images/products/vaseline-lotion.jpg",
          },
          {
            id: 26,
            name: "Romand Blur Fudge Tint",
            category: "Makeup",
            price: 12.69,
            image: "/images/products/romand-blur-fudge-tint.webp",
          },
          {
            id: 27,
            name: "Romand Lasting Tint",
            category: "Makeup",
            price: 11.95,
            image: "/images/products/romand-juicy-lasting-tint.webp",
          },
          {
            id: 28,
            name: "Romand Mascara",
            category: "Makeup",
            price: 9.99,
            image: "/images/products/romand-mascara.webp",
          },
          {
            id: 29,
            name: "Garnier Face Mask",
            category: "Mask",
            price: 5.5,
            image: "/images/products/garnier-skin-naturals-face-mask.webp",
          },
          {
            id: 30,
            name: "Round Lap Sunscreens",
            category: "Sunscreens",
            price: 19.8,
            image: "/images/products/round-lab-sunscreen.webp",
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
    <div className="section-container px-4 sm:px-6 lg:px-8">
      {" "}
      {/* Add horizontal padding here */}
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
                : `/products?category=${category}`
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
