import React from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
const SimpleDetailsNewsCard = ({ news, type, height }) => {
  // console.log(news)
  return (
    <div className="bg-white">
      <div className="group relative overflow-hidden">
        <div
          style={{ height: `${height}px` }}
          className={`w-full  group-hover:scale-[1.1] transition-all duration-[1s]`}
        >
          <Image
            fill
            src={news.image}
            alt="images"
            style={{ objectFit: "cover", backgroundRepeat: "no-repeat" }}
          />

          {/* {news?.image ? (
  <Image
    fill
    src={news.image}
    alt="news image"
    style={{ objectFit: "cover", backgroundRepeat: "no-repeat" }}
  />
) : (
  <div className="bg-gray-100 w-full h-full flex items-center justify-center text-gray-500">
    No image
  </div>
)} */}
        </div>
        <div className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300">
          {" "}
        </div>
        <div className="left-5 absolute bottom-4 flex justify-start items-start gap-x-2 text-white font-semibold gap-y-2">
          <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-amber-300">
            {news.category}
          </div>
          <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-amber-300">
            {news.category}
          </div>
        </div>
      </div>
      <div className="p-5 ">
        <Link
          className="text-[15px] font-bold text-[#333333] hover:text-amber-500"
          href={`/news/${news?.slug}`}
        >
          {news?.title}
        </Link>
        <div className="flex gap-x-2 text-xs font-normal text-slate-400">
          <span>{news?.date}</span>
          <span>{news?.writerName}</span>
        </div>
        {type === "details-news" && (
          <div className="text-sm text-slate-600 pt-3">
            {parse((news?.description || "").slice(0, 210))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleDetailsNewsCard;
