import React from "react";
import Title from "../Title";
import NewsCard from "./items/NewsCard";
import parse from "html-react-parser"
const dummy = [
  {
    image:
      "https://thumbs.dreamstime.com/b/bright-blue-orange-text-displays-breaking-news-digital-screen-surrounded-abstract-data-visualization-elements-386391298.jpg",
    category: "Economy",
    title: "Daily Pulse on Startup News",
    slug: "daily-pulse-1",
    date: "July 10, 2025",
    writerName: "Ravinder",
    description: `Daily Pulse on Startup News – July 10, 2025

India’s startup ecosystem continues to buzz with energy and innovation. Mumbai-based quick commerce startup Zepto has secured a massive $350 million in its Series D funding round, led by Tiger Global, making it the fastest-growing unicorn of 2025 with a valuation of $2.4 billion. Meanwhile, electric vehicle disruptor E-Volt Motors has launched a budget-friendly e-scooter priced at ₹59,999, targeting rural and semi-urban users with a 100 km range and FAME-II eligibility. In the SaaS space, Zoho has acquired Chennai’s document automation startup PaperStack, aiming to supercharge Zoho Writer with AI-backed collaboration tools. On the green tech front, GreenNest, a Hyderabad-based women-led startup focused on sustainable indoor farming, raised ₹4.5 crore in seed funding. Adding to the momentum, Bengaluru’s FutureEdge Incubator announced a new AI accelerator program specifically designed to support tier-2 innovators from cities like Lucknow, Guwahati, and Coimbatore—offering mentorship, cloud credits, and pre-seed investor access. These developments signal strong investor confidence and a growing support system for India’s next generation of entrepreneurs.`,
  },
];

const InsightNews = ({ news }) => {
   
  const pulse = news?.Startup?.[0] || dummy[0];
  // console.log(news)

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4">
      {/* Left column */}
      <div className="w-full lg:w-6/12">
        <div className="pl-2">
          <Title title="Insights" />
          <div className="grid grid-cols-1 gap-y-[14px] mt-4">
            
            {news?.slice(0, 4).map((item, i) => (
              <NewsCard item={item} key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="w-full lg:w-6/12">
        <div className="pl-1">
          <Title title="Daily Pulse" />
          <div className="w-full mt-4 bg-white rounded-md shadow p-4">
            <img
              src={pulse.image}
              alt="Daily Pulse"
              className="w-full h-[240px] object-cover rounded-md mb-4"
            />
            <div className="text-sm text-slate-500 flex gap-4 mb-1">
              <span>{pulse.date}</span>
              <span>{pulse.writerName}</span>
            </div>
            <h3 className="text-lg font-semibold text-[#333] mb-2">
              {pulse.title}
            </h3>
            <p className="text-sm text-slate-600">{parse(pulse.description).slice(0,800)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightNews