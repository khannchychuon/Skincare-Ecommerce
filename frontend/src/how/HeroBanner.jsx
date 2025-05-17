import { useState, useEffect } from "react";
import pccImage1 from "./pcc.png";
import pccImage2 from "./pcc.png";
import pccImage3 from "./pcc.png";

const images = [pccImage1, pccImage2, pccImage3]; // Add more images as needed

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-pink-50 rounded-lg overflow-hidden">
      {/* Background Image with Slide Effect */}
      <img
        src={images[currentIndex]}
        alt={`Beauty model ${currentIndex + 1}`}
        className="w-full h-full object-cover absolute inset-0 transition-all duration-1000"
      />

      {/* Text and Button Overlay */}
      <div className="relative z-10 text-center text-white p-6">
        <h1 className="text-4xl md:text-5xl font-serif leading-tight">
          Free
          <br />
          Shipping
          <br />
          Beauty
        </h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Shop Top Quality Haircare, Makeup, Skincare,
          <br />
          Nailcare &amp; Much More.
        </p>
        <div className="mt-6">
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Pagination Dots at the Bottom */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-pink-500" : "bg-pink-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
