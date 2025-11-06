import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  return (
    <section className="pt-28 pb-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-red-800">Contact Us</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Get in touch and our team will respond as soon as possible.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl p-10 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-800"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-800"
              placeholder="example@mail.com"
            />
          </div>

          {/* Phone + Postcode */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Phone</label>
              <input
                type="tel"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-800"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Postcode</label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-800"
                placeholder="e.g. B1 1AA"
              />
            </div>
          </div>

          {/* Dropdown */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Enquiry Type</label>
            <select className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-800">
              <option value="">--- Select an Enquiry Type ---</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Pest Control">Pest Control</option>
              <option value="Locks">Locks</option>
              <option value="Glazing">Glazing</option>
              <option value="Gas & Heating">Gas & Heating</option>
              <option value="Electrics">Electrics</option>
              <option value="Drainage">Drainage</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Message</label>
            <textarea
              rows="5"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-800"
              placeholder="Describe the issue or request..."
            ></textarea>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Attach Image (optional)</label>
            <input type="file" className="w-full" />
          </div>

          {/* Consent */}
          <div className="flex items-center space-x-3">
            <input type="checkbox" className="h-4 w-4" />
            <p className="text-gray-600 text-sm">
              I consent to my submitted data being collected and stored.
            </p>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-red-800 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
          >
            Submit Enquiry
          </motion.button>
        </motion.form>

        {/* Info Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-3xl font-bold text-red-800">We’re Here to Help</h3>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Whether it’s routine maintenance, urgent electrical failures, or system upgrades — Apollo Electrical Contractors is ready to respond.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.6 } }}
          className="mt-16 bg-red-800 text-white py-14 rounded-2xl text-center shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-4">24/7 Emergency Service</h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto text-lg">
            Power outage? Burning smell? Tripping circuits? Call us immediately.
          </p>
          <a
            href="tel:+03300194817"
            className="inline-block px-10 py-3 bg-white text-red-800 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Call Now — 0330 019 4817
          </a>
        </motion.div>

      </div>
    </section>
  );
}
