import React from "react";

const bannerEvents = [
  { image: "/images/ourevents-1.png" },
  { image: "/images/ourevents-1.png" },
  { image: "/images/ourevents-1.png" },
];

const miniEvents = [
  {
    date: "04 Apr",
    title: "CSI Meet’n Greet’23",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. Illo ratione cupiditate ut vel pariatur a, blanditiis nesciunt quaerat corporis deleniti!",
  },
  {
    date: "12 Jun",
    title: "AI Bootcamp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. Illo ratione cupiditate ut vel pariatur a, blanditiis nesciunt quaerat corporis deleniti!",
  },
  {
    date: "18 Jul",
    title: "Designathon 2025",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. Illo ratione cupiditate ut vel pariatur a, blanditiis nesciunt quaerat corporis deleniti!",
  },
  {
    date: "24 Apr",
    title: "Cloud Summit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. Illo ratione cupiditate ut vel pariatur a, blanditiis nesciunt quaerat corporis deleniti!",
  },
  {
    date: "30 May",
    title: "Cybersecurity Talk",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. Illo ratione cupiditate ut vel pariatur a, blanditiis nesciunt quaerat corporis deleniti!",
  },
  {
    date: "10 Aug",
    title: "Startup Expo 2025",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. Illo ratione cupiditate ut vel pariatur a, blanditiis nesciunt quaerat corporis deleniti!",
  },
];

const OurEvents = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 overflow-hidden">
      {/* Background split */}
      <div className="absolute inset-0 z-0">
        <div className="h-1/2 bg-[#e8d7d7]"></div>
        <div className="h-1/2 bg-white"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4b0a0a]">
              Our Events
            </h2>
            <p className="text-sm text-gray-700 max-w-xl mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eveniet in fuga quaerat. Vero, illo deleniti beatae a quis sunt?
            </p>
          </div>
          <button className="text-sm font-semibold text-[#4b0a0a] hover:underline flex items-center gap-1">
            See all
            <span className="h-[2px] w-5 bg-[#4b0a0a] block"></span>
          </button>
        </div>

        {/* Banner Events */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {bannerEvents.map((event, i) => (
            <div
              key={i}
              className="relative group rounded-md overflow-hidden shadow-lg"
            >
              <img
                src={event.image}
                alt="Event Banner"
                className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Mini Events */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-8">
          {miniEvents.map((event, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 min-h-[120px]"
            >
              <div className="bg-[#4b0a0a] text-white text-center px-3 py-2 rounded-md shadow">
                <p className="text-base font-bold leading-tight">
                  {event.date.split(" ")[0]}
                </p>
                <p className="text-xs uppercase">{event.date.split(" ")[1]}</p>
              </div>
              <div>
                <h4 className="text-md font-bold text-[#2d2d2d]">
                  {event.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1 leading-snug">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurEvents;
