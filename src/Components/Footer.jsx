import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p>We are dedicated to delivering premium services backed by years of experience.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-red-300 transition">Home</a></li>
              <li><a href="/services" className="hover:text-red-300 transition">Services</a></li>
              <li><a href="/contact" className="hover:text-red-300 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p>123-456-7890</p>
            <p>info@example.com</p>
            <p>City, Country</p>
          </div>
        </div>
        <div className="mt-12 text-center text-sm">
          &copy; {new Date().getFullYear()} Apollo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
