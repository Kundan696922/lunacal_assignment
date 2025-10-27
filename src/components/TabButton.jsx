import React from "react";

const TabButton = ({ active, children, onClick }) => (
  <div
    className="w-48 h-12 px-6 py-2.5 relative rounded-2xl flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    {active && (
      <div className="w-48 h-12 left-0 top-0 absolute bg-zinc-800 rounded-2xl shadow-[13.493332862854004px_16.866666793823242px_67.46666717529297px_8.433333396911621px_rgba(10,10,10,1.00)] shadow-[-8.433333396911621px_-16.866666793823242px_50.599998474121094px_-16.866666793823242px_rgba(72,91,113,1.00)]" />
    )}
    <div
      className={`text-center justify-center text-lg font-medium font-['Poppins'] leading-4 z-10 ${
        active ? "text-white" : "text-gray-400"
      }`}
    >
      {children}
    </div>
    {!active && (
      <div className="w-48 h-12 left-[-200px] top-0 absolute bg-gradient-to-r from-zinc-800/10 to-blue-300/5 rounded-2xl" />
    )}
  </div>
);

export default TabButton;


