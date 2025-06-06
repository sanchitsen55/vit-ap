import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const tabs = ["Undergraduate", "Integrated", "Postgraduate", "Doctorial"];

const courses = [
  "B.Tech In Computer Science And Engineering",
  "B.Tech In Computer Science And Engineering Specialization In AI",
  "B.Tech In Computer Science And Engineering Specialization In Data Analytics",
  "B.Tech In Computer Science And Engineering Specialization In Network And Security",
  "B.Tech In Computer Science And Engineering Specialization In Robotics",
  "B.Tech In Electronics And Computers Engineering Specialization In VLSI",
  "B.Tech In Mechanical Engineering",
  "B.Tech In Mechanical Engineering Specialization In Smart Manufacturing",
  "B.Tech In Civil Engineering",
  "B.Tech In Civil Engineering Specialization In Smart Infrastructure",
  "B.Tech In Electrical and Electronics Engineering",
  "B.Tech In Electrical and Electronics Engineering Specialization In Energy Engineering",
];

const ProgramsOffered = () => {
  const [activeTab, setActiveTab] = useState("Undergraduate");

  return (
    <div className="w-full bg-[#4b0a0a] text-white py-16 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        
        {/* Left Section */}
        <div className="relative border border-white border-opacity-40 p-6 sm:p-8 pt-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Programs Offered
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
            Program covers the entire spectrum of new-age specializations. This program seamlessly integrates
            basic science concepts to the latest technologies with relevant practice through lab and projects
            for building problem-solving skills.
          </p>

          <div className="flex flex-col border-t border-l border-white border-opacity-40">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-left px-6 py-3 border-r border-b border-white border-opacity-40 transition-all
                  ${activeTab === tab
                    ? "bg-white text-[#4b0a0a] font-semibold"
                    : "text-white hover:bg-[#6e1e1e] hover:bg-opacity-50"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative bg-[#e9d2d2] text-[#4b0a0a] border border-white border-opacity-40 p-6 max-h-[450px] overflow-y-auto shadow-lg">
          <h4 className="text-sm font-semibold text-gray-600 mb-4">
            ENGINEERING
          </h4>
          <ul className="space-y-4 text-sm">
            {courses.map((course, idx) => (
              <li key={idx} className="border-b border-gray-300 pb-3">
                <p className="font-medium">{course}</p>
              </li>
            ))}
          </ul>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-4 right-4 animate-bounce">
            <ChevronDown className="w-5 h-5 text-[#4b0a0a]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsOffered;
