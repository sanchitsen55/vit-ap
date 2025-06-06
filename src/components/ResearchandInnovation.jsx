import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Reusable StatBox component
const StatBox = ({ end, label, decimals = 0, suffix = "+" }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <p className="text-3xl font-bold text-[#4b0a0a]">
        {inView && (
          <CountUp
            start={0}
            end={end}
            duration={2}
            decimals={decimals}
            suffix={suffix}
            useEasing
          />
        )}
      </p>
      <p className="text-gray-700 mt-1">{label}</p>
    </div>
  );
};

const ResearchAndInnovation = () => {
  return (
    <section className="bg-[#f7f7fa] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#4b0a0a] text-center mb-10">
          Research And Innovation
        </h2>

        {/* Images Row */}
        <div className="relative flex flex-col lg:flex-row gap-6 items-center mb-24 lg:mb-20">
          {["researchinno-1.png", "researchinno-2.png", "researchinno-3.png"].map((img, idx) => (
            <img
              key={idx}
              src={`/images/${img}`}
              alt={`Research ${idx + 1}`}
              className="w-full lg:w-1/3 object-cover rounded-md transition-transform duration-300 transform hover:scale-105"
            />
          ))}

          {/* Overlay */}
          <div className="absolute -bottom-10 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-[#4b0a0a] text-white text-center px-6 py-2 rounded shadow-md z-10 text-sm sm:text-base whitespace-nowrap">
            Top Quality and Learning Experience
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center pt-12 border-t border-gray-300 gap-y-10 md:gap-y-0 md:divide-x md:divide-gray-300">
          <div className="w-full md:w-1/3 px-6">
            <StatBox end={1000} label="Publications" />
          </div>
          <div className="w-full md:w-1/3 px-6">
            <StatBox end={300} label="Patents" />
          </div>
          <div className="w-full md:w-1/3 px-6">
            <StatBox end={1.5} label="Sponsored Budget" decimals={1} suffix=" Cr+" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAndInnovation;
