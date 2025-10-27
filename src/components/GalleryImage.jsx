import React from "react";

const GalleryImage = ({ src, index }) => (
  <div
    data-property-1="Default"
    className="w-72 h-80 absolute transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-3.5"
    style={{ left: `${index * 211 + -19}px`, top: "91px" }}
  >
    <div className="w-48 h-44 left-[75px] top-[35px] absolute bg-black/20 rounded-3xl overflow-hidden">
      {src && (
        <img src={src} alt="Gallery" className="w-full h-full object-cover" />
      )}
    </div>
  </div>
);

export default GalleryImage;


