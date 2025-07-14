

import React from "react";
import Title from "../Title";
import SimpleDetailsNewsCard from "./items/SimpleDetailsNewsCard";
import NewsCard from "./items/NewsCard";

const DetailsNewsRow = ({ news,category, type }) => {
  // console.log(news)
  // console.log(category)
  return (
    <div className="w-full flex flex-col gap-[14px] pr-2">
      <Title title={category} />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        <SimpleDetailsNewsCard news={news[0]} type={type} height={300} />
        <div className="grid grid-cols-1 gap-y-[14px]">
       {news.slice(1, 6).map((item, i) => (
         <NewsCard item={item} key={i} />
       ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsNewsRow;
