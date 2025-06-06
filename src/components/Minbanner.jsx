import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/images/cmbanner-1.avif",
  "/images/carousel-2.avif",
  "/images/carousel-3.png",
  "/images/cmbanner-1.avif",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current, length]);

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
   <div className="relative w-full mt-[70px] sm:mt-[80px] md:mt-[96px] h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-screen overflow-hidden">

      {/* Slide Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 sm:left-5 transform -translate-y-1/2 bg-black/30 text-white p-2 sm:p-3 rounded-full z-20"
      >
        <FaArrowLeft className="text-sm sm:text-lg" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 sm:right-5 transform -translate-y-1/2 bg-black/30 text-white p-2 sm:p-3 rounded-full z-20"
      >
        <FaArrowRight className="text-sm sm:text-lg" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === current ? "bg-white scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
