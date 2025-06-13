import { useState, useEffect } from "react";
import pccImage1 from "./pic1.avif";
import pccImage2 from "./pic2.jpg";
import pccImage3 from "./pic3.webp";
import pccImage4 from "./pic4.jpg";
import pccImage5 from "./pic5.avif";

const images = [pccImage1, pccImage2, pccImage3, pccImage4, pccImage5];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="relative w-full px-4 pt-4">
      {/* Carousel Container */}
      <div
        className="relative w-full aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6] overflow-hidden rounded-xl shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Slides */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-[3px] w-5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-7" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
