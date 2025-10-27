import React from "react";
import TabButton from "./TabButton";

const TabNavigation = ({ activeTab, onTabChange }) => (
  <>
    <div className="w-[614px] h-16 left-[53px] top-[17px] absolute bg-neutral-900 rounded-3xl shadow[inset_0px_0px_37.2000732421875px_6.20001220703125px_rgba(0,0,0,0.35)] shadow-[inset_0px_4.960009574890137px_12.4000244140625px_2.4800047874450684px_rgba(0,0,0,0.25)]" />

    <div className="w-48 h-12 left-16 top-6 absolute bg-zinc-800 rounded-2xl shadow-[13.493332862854004px_16 866666793823242px_67.46666717529297px_8.433333396911621px_rgba(10,10,10,1.00)] shadow-[-8.433333396911621px_-16.866666793823242px_50.599998474121094px_-16.866666793823242px_rgba(72,91,113,1.00)]" />

   


    <div className="left-[59px] top-[23px] absolute inline-flex justify-start items-center gap-1.5">
      <TabButton
        active={activeTab === "about"}
        onClick={() => onTabChange("about")}
      >
        About Me
      </TabButton>

      <TabButton
        active={activeTab === "experience"}
        onClick={() => onTabChange("experience")}
      >
        Experiences
      </TabButton>

      <TabButton
        active={activeTab === "recommended"}
        onClick={() => onTabChange("recommended")}
      >
        Recommended
      </TabButton>
    </div>
  </>
);

export default TabNavigation;

