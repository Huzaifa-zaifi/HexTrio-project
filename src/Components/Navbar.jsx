import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-red-800 text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          Apollo
        </div>


        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="/" className="hover:text-gray-200 transition">Home</a>
          <a href="#" className="hover:text-gray-200 transition">Services</a>
          <a href="#-us" className="hover:text-gray-200 transition">Why Us</a>
          <a href="#" className="hover:text-gray-200 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};
