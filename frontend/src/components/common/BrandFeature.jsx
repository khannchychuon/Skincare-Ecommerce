"use client";

import { Link } from "react-router-dom";

const BrandFeature = () => {
  // Sample brand data with logo images
  const brands = [
    {
      id: 1,
      name: "CeraVe",
      logo: "/images/brands/cerave-logo.png",
      slug: "cerave",
    },
    {
      id: 2,
      name: "Nivea",
      logo: "/images/brands/nivea-logo.jpg",
      slug: "nivea",
    },
    {
      id: 3,
      name: "Cosrx",
      logo: "/images/brands/cosrx-logo.webp",
      slug: "cosrx",
    },
    {
      id: 4,
      name: "Romand",
      logo: "/images/brands/romand-logo.png",
      slug: "romand",
    },
    {
      id: 5,
      name: "Round Lab",
      logo: "/images/brands/roundlab-logo.webp",
      slug: "roundlab",
    },
    {
      id: 6,
      name: "Laneige",
      logo: "/images/brands/laneige-logo.webp",
      slug: "laneige",
    },
  ];

  return (
    <div className="section-container px-4 sm:px-6 lg:px-8 pb-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center">
          <div className="flex-grow border-t border-teal-500"></div>
          <h2 className="px-4 text-3xl font-bold text-[#2f4f4f] whitespace-nowrap">
            Brands
          </h2>
          <div className="flex-grow border-t border-teal-500"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            to={`/products?brand=${brand.slug}`}
            className="group flex items-center justify-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            aria-label={brand.name}
          >
            <div className="w-16 h-16 flex items-center justify-center p-1 relative">
              <img
                src={brand.logo}
                alt={brand.name}
                className="absolute h-auto w-auto max-h-[80%] max-w-[80%] object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                onError={(e) => {
                  e.target.src = "/images/placeholder-brand.png";
                }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandFeature;
