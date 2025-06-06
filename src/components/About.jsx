import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const announcements = [
  { date: "13TH SEP, 2023", title: "VITREE January 2024 - Apply Now" },
  { date: "17TH SEP, 2023", title: "VITREE January 2024 - Apply Now" },
  { date: "29TH MAY, 2023", title: "VITREE January 2024 - Apply Now" },
  { date: "29TH MAY, 2023", title: "VITREE January 2024 - Apply Now" },
  { date: "17TH SEP, 2023", title: "VITREE January 2024 - Apply Now" },
  { date: "29TH MAY, 2023", title: "VITREE January 2024 - Apply Now" },
];

const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 py-12 bg-white">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#750013] mb-6 text-center lg:text-left">
        About VIT-AP
      </h2>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* Left Section */}
        <div>
          <div className="w-full max-w-[600px] mb-4 mx-auto lg:mx-0">
            <img
              src="/images/aboutvit.png"
              alt="VIT Campus"
              className="w-full h-auto rounded shadow"
            />
          </div>

          <p className="text-gray-800 text-base sm:text-lg mb-8 text-center lg:text-left">
            VIT-AP University is one of India's Best Top Emerging Universities
          </p>

          {/* Counters */}
          <div ref={ref} className="grid grid-cols-2 sm:grid-cols-2 gap-y-8 gap-x-8">
            {[
              { label: "Students", value: 11165 },
              { label: "Schools", value: 7 },
              { label: "Faculty", value: 343 },
              { label: "Publications", value: 1000 },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-[#750013]">
                  {inView ? (
                    <CountUp end={item.value} duration={3} separator="," />
                  ) : (
                    "0"
                  )}
                  {item.label === "Schools" ? "" : "+"}
                </h3>
                <p className="mt-1 text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Announcements */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4 gap-2">
              <h2 className="text-lg font-bold text-[#750013] uppercase">
                Our Announcements
              </h2>
              <span className="text-sm font-medium text-[#750013] flex items-center gap-1 cursor-pointer hover:underline">
                View More
                <span className="h-[2px] w-6 bg-[#750013] block" />
              </span>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {announcements.map((a, index) => (
                <div key={index} className="border-b pb-2">
                  <p className="text-xs text-gray-500">{a.date}</p>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-800">
                    {a.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
