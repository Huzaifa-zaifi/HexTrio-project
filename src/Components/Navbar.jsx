import React, { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "/whyus" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-red-800 shadow-lg border-b border-red-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">

        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-white cursor-pointer select-none">
          Apollo Electrics
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white/90 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+123456789"
            className="flex items-center px-4 py-2 bg-white text-red-800 font-semibold rounded-lg hover:bg-gray-100 transition shadow-sm"
          >
            <PhoneCall size={18} className="mr-2" />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-red-800 px-6 pb-4 shadow-inner border-t border-red-900 transform transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 mt-4 text-white font-medium">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-white/70 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="tel:+123456789"
            className="flex items-center justify-center px-4 py-2 bg-white text-red-800 font-semibold rounded-lg hover:bg-gray-100 transition shadow-sm"
          >
            <PhoneCall size={18} className="mr-2" />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};
