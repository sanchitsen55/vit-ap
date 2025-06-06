import React from "react";

const schools = [
  { name: "", image: "/images/ourschoolgirl.png" },
  { name: "", image: "/images/ourschoolgirl.png" },
  { name: "", image: "/images/ourschoolgirl.png" },
  { name: "", image: "/images/ourschoolgirl.png" },
  { name: "", image: "/images/ourschoolgirl.png" },
  { name: "", image: "/images/ourschoolgirl.png" },
  { name: "", image: "/images/ourschoolgirl.png" },
];

const OurSchools = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Split */}
      <div className="absolute inset-0 z-0">
        <div className="h-[50%] bg-[#f1dede]"></div>
        <div className="h-[50%] bg-white"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Heading Section */}
        <div className="pt-16 pb-10 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#750013] mb-4">
              Our Schools
            </h2>
            <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto lg:mx-0">
              At VIT-AP the entire teaching-learning process is concentrated around six schools. A research center is also part of the schools, that encourages students to participate in exciting research projects amongst these departments.
            </p>
          </div>
        </div>

        {/* First Row - 4 Images */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 md:-mt-16">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {schools.slice(0, 4).map((school, index) => (
              <img
                key={index}
                src={school.image}
                alt="School"
                className="w-full h-[300px] md:h-[360px] object-cover rounded-md transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/* Second Row - 3 Centered Images */}
   <div className="mt-6 md:mt-8 px-4 sm:px-6">

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
              {schools.slice(4).map((school, index) => (
                <img
                  key={index + 4}
                  src={school.image}
                  alt="School"
                  className="w-full h-[300px] md:h-[360px] object-cover rounded-md transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSchools;
