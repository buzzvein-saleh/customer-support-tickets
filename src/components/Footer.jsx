import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-200 mt-12 pt-10 pb-4 px-4 md:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
      <div className="md:col-span-2">
        <div className="font-bold text-xl mb-2">CS — Ticket System</div>
        <p className="text-sm mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s...
        </p>
      </div>
      <div>
        <div className="font-semibold mb-2">Company</div>
        <ul className="text-sm space-y-1">
          <li>About Us</li>
          <li>Our Mission</li>
          <li>Contact Sailed</li>
        </ul>
      </div>
      <div>
        <div className="font-semibold mb-2">Services</div>
        <ul className="text-sm space-y-1">
          <li>Products & Services</li>
          <li>Customer Stories</li>
          <li>Download Apps</li>
        </ul>
      </div>
      <div>
        <div className="font-semibold mb-2">Information</div>
        <ul className="text-sm space-y-1">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Join Us</li>
        </ul>
        <div className="font-semibold mt-4 mb-2">Social Links</div>
        <ul className="text-sm space-y-1">
          <li>⚫ @CS — Ticket System</li>
          <li>⚫ @CS — Ticket System</li>
          <li>⚫ @CS — Ticket System</li>
          <li>✉️ support@cst.com</li>
        </ul>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 mt-8">
      © 2025 CS — Ticket System. All rights reserved.
    </div>
  </footer>
);

export default Footer;
