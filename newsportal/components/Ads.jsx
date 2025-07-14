import React from "react";
import Image from "next/image";
import Title from "./Title";



const Ads = () => {
  return (
    <div className="w-full flex flex-col gap-[14px] pl-2">
      <Title title={"advertisement"} />

      <div className="bg-white h-[300px] overflow-hidden group relative">
        <div className="w-full h-full group-hover:scale-[1.1] transition-all duration-[1s]">
          <Image
            fill
            src="http://res.cloudinary.com/dmopmzgod/image/upload/v1750839915/news_images/dxvgcsi72nkterw8sxeh.jpg"
            alt="news image"
            style={{ objectFit: "cover", backgroundRepeat: "no-repeat" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Ads;
