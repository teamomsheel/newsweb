import React from "react";
import NewsCard from "./items/NewsCard";
import Title from "../Title";

const RecentNews = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/recent/news`, {
    next: {
      revalidate: 1,
    },
  });
  const { news } = await res.json();
  // console.log(news)

  return (
    <div className="w-full flex flex-col gap-y-[14px]  pt-4">
      <div className="pl-4">
        <Title title="Recent news" />
      </div>
      <div className="grid grid-cols-1  gap-y-3 px-3">
        {
        news&& news.length>0 && news.map((item, i) => (
          <NewsCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
