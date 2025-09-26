import React from "react";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";

const Banner = ({ inProgressCount, resolvedCount }) => (
  <section className="w-full flex flex-col md:flex-row gap-6 mt-6">
    {/* In-Progress Card */}
    <div className="flex-1 relative rounded-xl overflow-hidden min-h-[160px] flex items-center justify-center bg-gradient-to-br from-[#422AD5] to-[#7B2FF2]">
      <img
        src={vector1}
        alt="vector1"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <div className="text-white text-lg font-semibold mb-2">In-Progress</div>
        <div className="text-5xl font-bold text-white text-center">
          {inProgressCount}
        </div>
      </div>
    </div>
    {/* Resolved Card */}
    <div className="flex-1 relative rounded-xl overflow-hidden min-h-[160px] flex items-center justify-center bg-gradient-to-br from-[#43E97B] to-[#11998e]">
      <img
        src={vector2}
        alt="vector2"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <div className="text-white text-lg font-semibold mb-2">Resolved</div>
        <div className="text-5xl font-bold text-white text-center">
          {resolvedCount}
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
