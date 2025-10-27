import React from "react";
import WidgetIcon from "./WidgetIcon";
import TabNavigation from "./TabNavigation";

const ExperiencesWidget = ({ activeTab, onTabChange }) => (
  <div className="w-[720px] h-80 absolute bg-zinc-700 rounded-[18.89px] shadow-[5.670000076293945px_5.670000076293945px_3.7799999713897705px_0px_rgba(0,0,0,0.40)]">
    <div className="w-6 left-[12px] top-[20px] absolute">
      <WidgetIcon />
    </div>

    <TabNavigation activeTab={activeTab} onTabChange={onTabChange} />

    <div className="w-[611px] left-[53px] top-[114px] absolute justify-start text-neutral-400 text-xl font-normal font-['Plus_Jakarta_Sans']">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore, veniam facere aliquid esse praesentium reiciendis dolorum quisquam fugiat laborum. Laboriosam ipsum perferendis nulla maxime odit praesentium amet est. Odio!
      <br />
      <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, eius!
    </div>
  </div>
);

export default ExperiencesWidget;
