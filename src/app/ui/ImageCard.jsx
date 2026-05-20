import React from "react";
import Image from "next/image";

const ImageCard = ({ img }) => {
  return (
    <div className="w-[260px] sm:w-[320px] aspect-[4/3] relative flex-shrink-0 mx-3 rounded-[2rem] overflow-hidden bg-[#1E1611]/5 border border-[#1E1611]/5 group cursor-pointer">
      {img.src ? (
        <Image
          src={img.src}
          alt={img.alt || "Adopted pet"}
          fill
          priority 
          sizes="(max-width: 640px) 260px, 320px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-white/40 text-xs text-[#7A726A]">
          Empty Slot
        </div>
      )}
    </div>
  );
};

export default ImageCard;
