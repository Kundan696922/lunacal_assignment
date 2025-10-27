import React, { useState } from "react";
import GalleryImage from "./GalleryImage";
import NavButton from "./NavButton";
import WidgetIcon from "./WidgetIcon";

const GalleryWidget = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const showPrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? images.length - visibleCount : prev - 1
    );
  };

  const showNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= images.length ? 0 : prev + 1
    );
  };

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);

  // Wrap-around for final group
  if (visibleImages.length < visibleCount) {
    visibleImages.push(...images.slice(0, visibleCount - visibleImages.length));
  }

  return (
    <div className="w-[720px] h-80 left-[925px] rounded-[18.89px] top-[436px] absolute overflow-hidden bg-zinc-700">
      <div className="w-6 left-[12px] top-[20px] absolute z-10">
        <WidgetIcon />
      </div>
      <div className="w-36 h-16 left-[60px] top-[37px] absolute bg-neutral-900 rounded-[20px] shadow-[inset_0px_0px_30px_5px_rgba(0,0,0,0.35)] shadow-[inset_0px_4px_10px_2px_rgba(0,0,0,0.25)] z-10" />
      <div className="left-[99px] top-[53px] absolute justify-start text-white text-xl font-medium font-['Poppins'] z-10">
        Gallery
      </div>

      {/* Show exactly 3 images */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 px-6">
        {visibleImages.map((img, idx) => (
          <GalleryImage key={startIndex + idx} src={img} index={idx} />
        ))}
      </div>

      <div className="left-[557px] top-[48px] absolute z-10">
        <NavButton direction="left" onClick={showPrev} />
      </div>
      <div className="left-[620px] top-[49px] absolute z-10">
        <NavButton direction="right" onClick={showNext} />
      </div>
    </div>
  );
};

export default GalleryWidget;
