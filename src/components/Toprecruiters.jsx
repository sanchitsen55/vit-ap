import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const NumberAtGlanceSection = () => {
  const recruiters = [
    "/images/amazon.avif",
    "/images/amdocs.avif",
    "/images/bankofamerica.avif",
    "/images/bajajfinance.avif",
    "/images/capgemini.avif",
    "/images/bosch.avif",
  ];

  return (
    <section className="relative bg-[#f2f2f5] py-16 px-4 sm:px-6 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-[45%] h-full bg-[#e9e9ec] rounded-tr-[80px] rounded-br-[80px] z-0"></div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/toprecruiters.png"
              alt="Placement Poster"
              className="w-[340px] md:w-[400px] max-w-full rounded shadow-md"
            />
          </div>

          {/* Right: Heading + Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4b0a0a] mb-3">
              Number At Glance
            </h2>
            <div className="w-20 h-1 bg-[#750013] mb-5"></div>
            <p className="text-gray-700 leading-relaxed text-base md:text-[17px]">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        {/* Top Recruiters Title (Right aligned) */}
        <div className="flex justify-end mt-16">
          <div className="bg-[#750013] px-6 py-2 rounded-tl-lg rounded-br-lg shadow-md">
            <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl">
              Top Recruiters
            </h3>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="mt-6">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            navigation
            loop
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {recruiters.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white shadow rounded-lg h-[100px] flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300">
                  <img
                    src={img}
                    alt={`Recruiter ${i + 1}`}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NumberAtGlanceSection;
