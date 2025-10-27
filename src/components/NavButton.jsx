import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const NavButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="w-11 h-11 absolute flex items-center justify-center 
               bg-gradient-to-br from-gray-800 to-neutral-900 rounded-full 
               shadow-[4px_5px_30px_5px_rgba(16,18,19,1)] 
               shadow-[-5px_-3px_30px_-10px_rgba(150,190,231,1)]
               cursor-pointer"
  >
    {direction === "left" ? (
      <ArrowLeft className="text-zinc-300 w-5 h-5" />
    ) : (
      <ArrowRight className="text-zinc-300 w-5 h-5" />
    )}
  </button>
);

export default NavButton;

