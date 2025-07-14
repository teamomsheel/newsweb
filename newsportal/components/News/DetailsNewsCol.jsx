import React from "react";
import Title from "../Title";
import SimpleDetailsNewsCard from "./items/SimpleDetailsNewsCard";
import NewsCard from "./items/NewsCard";
import Ads from "../Ads";

const DetailsNewsCol = ({ news, category }) => {
  // console.log(category)
  return (
    <>
      {/* <div className="gap-5">
     <Ads/>
   </div> */}
      <div className="w-full flex flex-col gap-[14px] pl-2 ">
        <Title title={category} />
        <div className="grid grid-cols-1 gap-y-6  ">
          <SimpleDetailsNewsCard
            news={news[0]}
            type="details-news"
            height={300}
          />
        </div>
        <div className="grid grid-cols-1 gap-y-[14px] mt-4">
          {news?.slice(1, 6).map((item, i) => (
            <NewsCard item={item} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailsNewsCol;
