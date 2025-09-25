import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-200 mt-12 pt-10 pb-4 px-4 md:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
      {/* Column 1 */}
      <div className="flex flex-col w-full">
        <div className="font-bold text-xl mb-4">CS — Ticket System</div>
        <p className="text-sm text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col w-full">
        <div className="font-semibold mb-4">Company</div>
        <ul className="text-sm space-y-2 text-gray-400">
          <li>About Us</li>
          <li>Our Mission</li>
          <li>Contact Sailed</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col w-full">
        <div className="font-semibold mb-4">Services</div>
        <ul className="text-sm space-y-2 text-gray-400">
          <li>Products & Services</li>
          <li>Customer Stories</li>
          <li>Download Apps</li>
        </ul>
      </div>

      {/* Column 4 */}
      <div className="flex flex-col w-full">
        <div className="font-semibold mb-4">Information</div>
        <ul className="text-sm space-y-2 text-gray-400">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Join Us</li>
        </ul>
      </div>

      {/* Column 5 */}
      <div className="flex flex-col w-full">
        <div className="font-semibold mb-4">Social Links</div>
        <ul className="text-sm space-y-2 text-gray-400">
          <li className="flex items-center gap-2">
            <FaFacebookF className="text-blue-600" /> @CS — Ticket System
          </li>
          <li className="flex items-center gap-2">
            <FaLinkedinIn className="text-blue-500" /> @CS — Ticket System
          </li>
          <li className="flex items-center gap-2">
            <FaPinterestP className="text-red-600" /> @CS — Ticket System
          </li>
          <li className="flex items-center gap-2">
            <FaInstagram className="text-pink-500" /> support@cst.com
          </li>
        </ul>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-700 mt-8"></div>

    {/* Bottom copyright */}
    <div className="text-center text-xs text-white-500 mt-4">
      © 2025 CS — Ticket System. All rights reserved.
    </div>
  </footer>
);

export default Footer;
