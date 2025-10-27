import { CircleQuestionMark } from "lucide-react";
import React from "react";

const WidgetIcon = () => (
  <div className="w-6 inline-flex flex-col justify-start items-center gap-28">
    {/* <div className="w-6 h-6 bg-gradient-to-l from-neutral-600 to-gray-400" /> */}
    <CircleQuestionMark />
    <div className="self-stretch rounded-sm inline-flex justify-start items-start gap-[1.38px] flex-wrap content-start">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="w-2.5 h-2.5 bg-neutral-600 rounded-[1.16px]" />
      ))}
    </div>
  </div>
);

export default WidgetIcon;
