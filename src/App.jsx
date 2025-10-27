import React, { useState } from "react";
import AboutMeWidget from "./components/AboutMeWidget";
import GalleryWidget from "./components/GalleryWidget";
import AddImageButton from "./components/AddImageButton";
import "./scale.css";
import ExperiencesWidget from "./components/ExperiencesWidget";
import RecommendedWidget from "./components/RecommendedWidget";

const App = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [images, setImages] = useState([null, null, null]);

  const handleAddImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setImages((prev) => [...prev, event.target.result]);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <div className="scale-wrapper">
      <div className="w-[1728px] h-[895px] relative bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-3xl shadow-[10px_10px_40px_10px_rgba(0,0,0,0.50)] overflow-hidden">
        <div className="w-[836px] h-[689px] left-[29px] top-[98px] absolute bg-zinc-600/80 rounded-3xl border border-blue-300" />

        <div className="w-[720px] left-[922px] top-[96px] absolute">
          {activeTab === "about" && (
            <AboutMeWidget onTabChange={setActiveTab} />
          )}
          {activeTab === "experience" && (
            <ExperiencesWidget onTabChange={setActiveTab} />
          )}
          {activeTab === "recommended" && (
            <RecommendedWidget onTabChange={setActiveTab} />
          )}
        </div>

        <div className="w-2 h-16 left-[1621px] top-[207px] absolute bg-gradient-to-r from-zinc-500 to-neutral-600 rounded-lg shadow-[4px_4px_4.900000095367432px_0px_rgba(0,0,0,0.25)]" />

        <GalleryWidget images={images} />
        <AddImageButton onClick={handleAddImage} />

        <div className="w-[612px] h-1 left-[976px] top-[433px] absolute bg-white/5 rounded-sm shadow-[0px_4px_4px_0px_rgba(0,0,0,0.33)] backdrop-blur-[4.92px]" />
        <div className="w-[612px] h-1 left-[976px] top-[805px] absolute bg-white/5 rounded-sm shadow-[0px_4px_4px_0px_rgba(0,0,0,0.33)] backdrop-blur-[4.92px]" />
      </div>
    </div>
  );
};

export default App;

