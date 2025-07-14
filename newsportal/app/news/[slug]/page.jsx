import BreadCrumb from '@/components/BreadCrumb'

import SimpleDetailsNewsCard from "@/components/News/items/SimpleDetailsNewsCard";
import PopularNews from "@/components/News/PopularNews";
import Search from "@/components/Search";
import React from "react";
import Title from "@/components/Title";
import NewsCard from "@/components/News/items/NewsCard";
import parse from "html-react-parser";
import RelatedNews from "@/components/News/RelatedNews";
import RecentNews from "@/components/News/RecentNews";

const Details = async ({ params }) => {
  const { slug } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news/details/${slug}`, {
    next: {
      revalidate: 1,
    },
  });
  const { news, relatedNews } = await res.json();
  //  console.log(news.news)

  return (
    <div>
      <div className="bg-white shadow-sm py-4">
        <div className="px-4 md:px-8 w-full">
          <BreadCrumb one={news.category} two={news.title} />
          {/* <h3>Category:{category}</h3> */}
        </div>
      </div>
      <div className="bg-white w-full ">
        <div className="px-4 md:px-8 w-full py-8">
          <div className="flex flex-wrap ">
            <div className="w-full xl:w-8/12">
              <div className="w-full pr-0 xl:pr-4 bg-white">
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((news, i) => (
                    <SimpleDetailsNewsCard
                     news={{}}
                      type="details-news"
                      height={200}
                      key={i}
                    />
                  ))}
                </div> */}

                <div className="flex flex-col gap-y-5 bg-white">
                  <img src={news?.image} alt="image" />
                  <div className="flex flex-col gap-y-5 px-6 pb-6">
                    <h3 className="text-amber-500 uppercase font-medium text-xl">
                      {news?.category}
                    </h3>
                    <h2 className="text-xl text-gray-600 font-bold hover:text-amber-500">
                      {news?.title}
                    </h2>
                    <div className="flex gap-x-2 text-xs font-normal text-slate-600">
                      <span>{news?.date}/</span>
                      <span>{news?.writerName}</span>
                    </div>
                    <div>{parse(news?.description)}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-4/12">
              <div className="w-full pl-0 xl:pl-4">
                <div className="flex flex-col gap-y-6">
                  <Search />
                  <RecentNews />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-2 ">
            <RelatedNews news={relatedNews} type="Related news" />
            {/* <PopularNews type="Related news" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

// import React from "react";
// import BreadCrumb from "@/components/breadCrumb";
// import SimpleDetailsNewsCard from "@/components/News/items/SimpleDetailsNewsCard";
// import PopularNews from "@/components/News/PopularNews";
// import Search from "@/components/Search";
// import Title from "@/components/Title";
// import NewsCard from "@/components/News/items/NewsCard";

// const Details = async ({ params }) => {
//   const slug = params?.slug;

//   let news = null;

//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news/slug/${slug}`, {
//       cache: "no-store",
//     });
//     const data = await res.json();
//     news = data.news;
//   } catch (error) {
//     console.error("Failed to fetch news:", error);
//   }

//   return (
//     <div>
//       <div className="bg-white shadow-sm py-4">
//         <div className="px-4 md:px-8 w-full">
//           <BreadCrumb one={news?.category || "News"} two={news?.title || "Details"} />
//         </div>
//       </div>
//       <div className="bg-slate-300 w-full ">
//         <div className="px-4 md:px-8 w-full py-8">
//           <div className="flex flex-wrap ">
//             <div className="w-full xl:w-8/12">
//               <div className="w-full pr-0 xl:pr-4 bg-white">
//                 <SimpleDetailsNewsCard
//                   news={news}
//                   type="details-news"
//                   height={300}
//                 />
//               </div>
//             </div>
//             <div className="w-full xl:w-4/12">
//               <div className="w-full pl-0 xl:pl-4">
//                 <div className="flex flex-col gap-y-6">
//                   <Search />
//                   <div className="w-full flex flex-col gap-y-[14px]  pt-4">
//                     <div className="pl-4">
//                       <Title title="Recent news" />
//                     </div>
//                     <div className="grid grid-cols-1  gap-y-6 px-3">
//                       {[1, 2, 3, 4].map((_, i) => (
//                         <NewsCard key={i} />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="pt-2 ">
//             <PopularNews type="Related news" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;
