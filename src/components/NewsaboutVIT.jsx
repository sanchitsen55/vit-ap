import React from "react";

const newsItems = [
  {
    id: 1,
    date: "04-10-2023",
    title: "Honorable CM to VIT-AP HonorableHonorableHonorableHonorable",
    image: "/images/newsaboutvit.png",
  },
  {
    id: 2,
    date: "27-09-2023",
    title: "Honorable CM to VIT-AP HonorableHonorableHonorableHonorable",
    image: "/images/newsaboutvit.png",
  },
  {
    id: 3,
    date: "09-11-2023",
    title: "Honorable CM to VIT-AP HonorableHonorableHonorableHonorable",
    image: "/images/newsaboutvit.png",
  },
];

const NewsSection = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Split background layer */}
      <div className="absolute inset-0 z-0">
        <div className="h-[60%] bg-white"></div>
        <div className="h-[40%] bg-amber-950"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex justify-between items-center mb-12 flex-col sm:flex-row gap-4 px-2 sm:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4b0a0a]">
            News about VIT-AP
          </h2>
          <button className="text-sm font-semibold cursor-pointer text-[#4b0a0a] flex items-center gap-1 hover:underline">
            See all
            <span className="h-[2px] w-5 bg-[#4b0a0a] block ml-1"></span>
          </button>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className="relative bg-white shadow-md hover:shadow-xl rounded-md w-full transition-all duration-300"
            >
              {/* Accent Corners */}
              {index === 0 && (
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#750013]"></div>
              )}
              {index === 2 && (
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#750013]"></div>
              )}

              <img
                src={item.image}
                alt={`News ${item.id}`}
                className="w-full h-60 object-contain object-center bg-white p-2"
              />

              <div className="p-5 flex flex-col min-h-[180px]">
                <p className="text-sm text-gray-600 mb-1">Date: {item.date}</p>
                <h3 className="font-semibold text-lg text-[#222] mb-4 line-clamp-3">
                  {item.title}
                </h3>
                <div className="mt-auto">
                  <button className="flex items-center cursor-pointer hover:text-red-600 gap-2 text-[#750013] text-sm font-semibold">
                    <span className="inline-block">→</span>
                    EXPLORE NEWS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
