import { Plus } from "lucide-react";
import React from "react";

const AddImageButton = ({ onClick }) => (
  <div
    className="w-32 h-11 left-[1450px] top-[527px] absolute origin-top-left rotate-180 bg-white/5 rounded-[104px] shadow-[9px_10px_7.099999904632568px_0px_rgba(0,0,0,0.40)] shadow-[-0.5px_-0.5px_6.900000095367432px_0px_rgba(255,255,255,0.25)] shadow-[inset_0px_3.2604269981384277px_3.2604269981384277px_0px_rgba(255,255,255,0.15)] shadow-[inset_0px_0px_48.90641403198242px_0px_rgba(255,255,255,0.05)] backdrop-blur-[52.28px] cursor-pointer flex items-center justify-center"
    onClick={onClick}
  >
    <div className="rotate-180 flex items-center gap-1.5 text-white text-xs font-extrabold font-['Plus_Jakarta_Sans'] uppercase">
      <Plus size={14} />
      <span>Add Image</span>
    </div>
  </div>
);

export default AddImageButton;
