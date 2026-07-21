import React from "react";
import Subscribe from "../subscribe/Subscribe"; // ✅ Fixed import path

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-white pt-10 pb-4 px-5 mt-10">
      <div className="max-w-6xl mx-auto flex justify-between flex-wrap gap-10">
        {/* Left Section */}
        <div className="flex gap-14 flex-wrap">
          <div className="max-w-xs">
            <h3 className="text-lg mb-4 text-yellow-400">About Us</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-yellow-400 transition-colors duration-300 no-underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-yellow-400 transition-colors duration-300 no-underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-yellow-400 transition-colors duration-300 no-underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 min-w-[280px]">
          <Subscribe />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-8 pt-5 border-t border-gray-700 text-center text-sm text-gray-500">
        <p>&copy; 2024 Your Company All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
