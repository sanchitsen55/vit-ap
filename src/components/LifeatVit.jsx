import React from "react";

const imagePaths = [
  "/images/lifeatvit-1.png",
  "/images/lifeatvit-2.png",
  "/images/lifeatvit-3.png",
  "/images/lifeatvit-4.png",
  "/images/lifeatvit-5.png",
  "/images/lifeatvit-6.png",
  "/images/lifeatvit-7.png",
  "/images/lifeatvit-8.png",
  "/images/lifeatvit-9.png",
];

const LifeAtVIT = () => {
  return (
    <section className="bg-[#f1f1f1] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Top 4 Images */}
        {imagePaths.slice(0, 4).map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`life-top-${i}`}
            className="w-full h-40 object-cover rounded-md"
          />
        ))}

        {/* Left Image (slightly lowered) */}
        <div className="lg:col-start-1 lg:row-start-2 mt-6 lg:mt-12">
          <img
            src={imagePaths[4]}
            alt="left-img"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>

        {/* Center Block (spans 2 columns on lg) */}
        <div className="sm:col-span-2 lg:col-start-2 lg:col-span-2 row-start-2 flex flex-col items-center justify-center text-center px-6 py-10 bg-[#f7f7fa] rounded shadow z-10 mt-6">
          <p className="text-[#750013] italic font-medium mb-1">
            Explore our campus
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Life <span className="text-[#4b0a0a]">@ VIT-AP</span>
          </h2>
          <p className="text-sm text-gray-600 mb-6 max-w-sm">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur amet consectetur.
          </p>
          <button className="bg-[#750013] text-white px-6 py-2 cursor-pointer rounded-full text-sm font-semibold">
            EXPLORE
          </button>
        </div>

        {/* Right Image (slightly lowered) */}
        <div className="lg:col-start-4 lg:row-start-2 mt-6 lg:mt-12">
          <img
            src={imagePaths[5]}
            alt="right-img"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      </div>

      {/* Bottom 3 Images */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-2 sm:px-4">
        {imagePaths.slice(6, 9).map((src, i) => (
          <img
            key={i + 6}
            src={src}
            alt={`life-bottom-${i}`}
            className="w-full h-48 object-cover rounded-md"
          />
        ))}
      </div>
    </section>
  );
};

export default LifeAtVIT;
