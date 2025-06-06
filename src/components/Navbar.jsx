import React, { useState } from "react";
import { FaUniversity, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "About",
    "Admissions",
    "Academics",
    "Career Development Centre",
    "Campus Life",
    "Research",
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50 shadow-md">
      {/* Top Navbar */}
      <div className="bg-[#750013] text-white text-sm px-4 lg:px-8 py-2 flex justify-between items-center">
        <div className="flex items-center gap-1 cursor-pointer">
          <FaUniversity className="text-lg" />
          <span className="ml-1">CAMPUS</span>
          <MdChevronRight className="text-xl" />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <span className="hover:underline cursor-pointer">Alumni</span>
          <span className="hover:underline cursor-pointer">VIT-AP Advantages</span>
          <FaSearch className="cursor-pointer" />
          <div className="bg-white text-[#750013] rounded-full px-2 py-[2px] font-bold text-sm">
            360
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-black text-white px-4 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <img src="/images/vitlogo.png" alt="VIT Logo" className="h-10" />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold">VIT-AP</span>
              <span className="text-xs tracking-wider">UNIVERSITY</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 font-semibold text-sm">
            {navLinks.map((link) => (
              <span
                key={link}
                className="cursor-pointer hover:underline whitespace-nowrap"
              >
                {link}
              </span>
            ))}
          </div>

          {/* Mobile Toggle (Right-aligned) */}
          <div className="md:hidden">{/* Already handled above */}</div>
        </div>

        {/* Mobile Nav Links */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3 font-semibold text-sm">
            {navLinks.map((link) => (
              <span key={link} className="cursor-pointer hover:underline">
                {link}
              </span>
            ))}
            <hr className="border-gray-600 my-2" />
            <span className="hover:underline">Alumni</span>
            <span className="hover:underline">VIT-AP Advantages</span>
            <span className="hover:underline">Search</span>
            <span className="bg-white text-[#750013] rounded-full px-2 py-[2px] font-bold w-fit">
              360
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
