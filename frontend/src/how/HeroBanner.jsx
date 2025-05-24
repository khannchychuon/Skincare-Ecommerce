import { useState, useEffect } from "react";
import pccImage1 from "./p1.jpg";
import pccImage2 from "./herobanner2.jpg";
import pccImage3 from "./herobanner3.jpg";

const images = [pccImage1, pccImage2, pccImage3];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 500); // timing for fade effect
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden">
      {/* Fade effect container */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setFade(false);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-pink-500" : "bg-pink-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
