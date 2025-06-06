import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

const images = [
  "/images/wallsocial-2.png",
  "/images/wallsocial-3.png",
  "/images/wallsocial-2.png",
  "/images/wallsocial-3.png",
  "/images/wallsocial-3.png",
  "/images/wallsocial-1.png",
  "/images/wallsocial-2.png",
  "/images/wallsocial-1.png",
  "/images/wallsocial-2.png",
];

const socials = [
  { icon: <FaInstagram />, label: "Follow us on Instagram" },
  { icon: <FaXTwitter />, label: "Tweet with us on X" },
  { icon: <FaLinkedinIn />, label: "Grow with us on LinkedIn" },
  { icon: <FaFacebookF />, label: "Like us on Facebook" },
  { icon: <FaYoutube />, label: "Watch us on Youtube" },
];

const WallOfSocials = () => {
  return (
    <section className="bg-[#f7f7fa] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-2/5">
          <p className="text-[#750013] italic font-semibold mb-2">
            Stay Connected
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            The Wall <br /> of Socials <br />
            from <span className="text-[#4b0a0a]">VIT-AP</span>
          </h2>
          <p className="text-[#6b7280] underline mb-5 text-sm">
            Follow us on our Socials
          </p>
          <ul className="space-y-4">
            {socials.map((item, index) => (
              <li
                key={index}
                className="flex cursor-pointer items-center gap-3 group"
              >
                <div className="bg-[#e5dcdc] text-black p-2 rounded transition-colors duration-200 group-hover:bg-[#c2b1b1]">
                  {item.icon}
                </div>
                <span className="text-sm text-gray-800 transition-colors duration-200 group-hover:text-[#4b0a0a]">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-3/5 grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
          {/* Distribute all images in 3 columns with responsive gaps */}
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`wall-social-${i}`}
              className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] object-cover rounded-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WallOfSocials;
