import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const footerLinks = {
  quickLinks: ["Careers", "Gallery", "Hostels", "Transport", "Policies"],
  vitConnect: [
    "V-TOP Login",
    "V-TOP Parent Login",
    "Mail",
    "Alumni",
    "Contact Us",
  ],
  rankings: ["RAAC", "NAAC"],
  research: [
    "Centers",
    "Google Scholar",
    "Scopus",
    "Patents",
    "Projects",
    "Publications",
  ],
  academics: [
    "Programs Offered",
    "Academic Calendar",
    "Application Process",
    "Fee Structure",
    "Scholarship",
    "IQAC",
  ],
  info: [
    "Public Notice: University Act",
    "Forms",
    "Directory",
    "Feedback",
    "Academic Bank of Credit (ABC)",
  ],
  bottomLinks: [
    "VIT-AP Home",
    "Maps & Directions",
    "Search VIT-AP",
    "Emergency Info",
    "Privacy",
    "Terms of Use",
    "Copyright",
    "Trademarks",
    "Non-Discrimination",
    "Accessibility",
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#4b0a0a] text-white">
      {/* Quote */}
      <div className="py-10 px-4 bg-[#4b0a0a] text-white">
        <div className="max-w-4xl mx-auto relative">
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-left">
            <span className="block">
              “{" "}
              <span className="font-semibold">
                Lorem ipsum dolor sit amet consectetur, lorem ipsum
              </span>
            </span>
            <span className="block ml-[1.15rem]">
              dolor sit amet consectetur ”
            </span>
          </p>
          <p className="text-sm mt-4 text-right text-gray-300 pr-2">
      -Jagadish Mudiganti
    </p>
        </div>
      </div>

      {/* Link Sections */}
      {/* Link Sections */}
      <div className="bg-white text-black px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-y-10">
          {/* Left: 3 Columns, each with top+bottom stacked */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 flex-1">

            {/* Row 1: Top 3 Headings */}
            <div>
              <h4 className="font-bold mb-3 hover:text-[#750013] hover:underline">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                {footerLinks.quickLinks.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-[#750013] hover:underline transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">VIT Connect</h4>
              <ul className="space-y-1 text-sm">
                {footerLinks.vitConnect.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-[#750013] hover:underline transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">Ranking & Accreditation</h4>
              <ul className="space-y-1 text-sm">
                {footerLinks.rankings.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-[#750013] hover:underline transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Row 2: Bottom 3 Aligned Sections */}
            <div className="mt-8">
              <h4 className="font-bold mb-3 text-[#750013]">Research</h4>
              <ul className="space-y-1 text-sm">
                {footerLinks.research.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-[#750013] hover:underline transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-3 text-[#750013]">Academics</h4>
              <ul className="space-y-1 text-sm">
                {footerLinks.academics.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-[#750013] hover:underline transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-3 text-[#750013]">Information</h4>
              <ul className="space-y-1 text-sm">
                {footerLinks.info.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-[#750013] hover:underline transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Map + Address */}
          <div className="w-full md:w-[35%] mt-10 md:mt-0">
            <div className="w-full h-[140px]">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120705.19719575024!2d80.31210917508736!3d16.54111825568398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ef62c27cb83f%3A0x75a4c6c7e987d27d!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1717665783416!5m2!1sen!2sin"
                className="w-full h-full rounded-md border"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <h4 className="text-lg font-semibold mt-4 text-[#750013]">
              VIT-AP University, Amaravathi
            </h4>
            <p className="text-sm text-gray-800">
              Near Vijayawada - 522241, Andhra Pradesh.
            </p>
            <p className="mt-2 text-sm underline font-medium text-black cursor-pointer">
              HOW TO REACH VIT-AP ↗
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#750013] text-white text-sm">
        {/* Section 1: Logo on left + centered links */}
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-start gap-y-6">
          {/* Left: Logo */}
          <img
  src="/images/vitlogo.png"
  alt="logo"
  className="w-32 sm:w-36 md:w-40 lg:w-48 xl:w-56"
/>


          {/* Center: Two Rows of Links */}
          <div className="flex flex-col w-full items-center gap-3">
            {/* Row 1 */}
            <div className="flex flex-wrap justify-center gap-x-6 text-sm text-center">
              {[
                "VIT-AP Home",
                "Maps & Directions",
                "Search VIT-AP",
                "Emergency Info",
              ].map((item, i) => (
                <span key={i} className="whitespace-nowrap">
                  {item}
                </span>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap justify-center gap-x-6 text-sm text-center">
              {[
                "Privacy",
                "Terms of Use",
                "Copyright",
                "Trademarks",
                "Non-Discrimination",
                "Accessibility",
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="whitespace-nowrap hover:text-gray-300 hover:underline transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Footer Bottom Row */}
        <div className="bg-[#8c1c1c] py-3">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            {/* Left */}
            <div className="text-white">© VIT-AP University</div>

            {/* Center */}
            <div className="italic text-gray-200 text-center">
              Crafted with Passion at VIT-AP University by Website Team
            </div>

            {/* Right */}
            <div className="flex gap-4 text-xl text-white">
              {[
                FaInstagram,
                FaLinkedinIn,
                FaFacebookF,
                FaYoutube,
                FaTwitter,
              ].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
