import React from "react";

const Navbar = () => (
  <div className="w-full bg-white shadow">
    <nav className="flex items-center justify-between w-full max-w-screen-2xl mx-auto px-5 md:px-20 py-4">
      <div className="font-bold text-xl tracking-tight text-gray-900">
        CS — Ticket System
      </div>
      <div className="flex items-center gap-6">
        <ul className="hidden md:flex gap-4 text-gray-700 font-medium">
          <li>Home</li>
          <li>FAQ</li>
          <li>Changelog</li>
          <li>Blog</li>
          <li>Download</li>
          <li>Contact</li>
        </ul>
        <button className="ml-4 px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-br from-[#422AD5] to-[#7B2FF2] shadow hover:scale-105 transition-transform duration-200">
          + New Ticket
        </button>
      </div>
    </nav>
  </div>
);

export default Navbar;
