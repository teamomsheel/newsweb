// import BreakingLine from "@/components/BreakingLine";
// import LatestNews from "@/components/News/LatestNews";
// import Image from "next/image";
// import Title from "@/components/Title";
// import SimpleNewsCards from "@/components/News/items/SimpleNewsCards";
// import PopularNews from "@/components/News/PopularNews";
// import DetailsNewsRow from "@/components/News/DetailsNewsRow";
// import DetailsNews from "@/components/News/DetailsNews";
// import DetailsNewsCol from "@/components/News/DetailsNewsCol";
// import NewsCard from "@/components/News/items/NewsCard";
// import Magazine from "@/components/News/Magazine";
// import Footer from "@/components/Footer";
// import axios from "axios";
// import Travel from "@/components/News/Travel";
// import InsightNews from "@/components/News/InsightNews";
// import RecentNews from "@/components/News/RecentNews";
// // import Ads from "@/components/Ads";
// const Home = async () => {
//   const news_data = await fetch(
//     `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/all/news`,
//     {
//       //  headers: { Accept: "application/json" }
//       next: {
//         revalidate: 5,
//       },
//     }
//   );
//   const { news } = await news_data?.json();
  
//   // console.log(news)

//   return (
//     <main>
//       <BreakingLine news={news} />
//       <div className="bg-slate-200">
//         {/* Floating Video */}
//         <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 w-[250px] h-[140px] sm:w-[300px] sm:h-[170px] z-50 shadow-lg border border-gray-300 bg-black rounded-md overflow-hidden">
//           <iframe
//             className="w-full h-full"
//             src="https://www.youtube.com/embed/LL-3RD5nuKo?si=61g5Qh9_vMvZ7eTO"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//         <div className="px-4 md:px-8 py-8">
//           <div className="flex flex-wrap">
//             <div className="w-full lg:w-6/12">
//               <LatestNews  news={news['Education']}/>
//             </div>
//             <div className="w-full lg:w-6/12 mt-5 lg:mt-0">
//               <div className="w-full flex flex-col gap-y-[14px] pl-0 lg:pl-2">
//                 <Title title="Technology" />
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
//                   {news["Technology"].map((item, i) => {
//                     if (i < 4) {
//                       return <SimpleNewsCards item={item} key={i} />;
//                     }
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <PopularNews type="Top Stories" news={news["Technology"]} />
          

//           {/* first section  */}
//           <div className="w-full">
//             <div className="flex flex-wrap ">
//               <InsightNews news={news["Technology"]} category="Health"/>
//               <div className="w-full lg:w-8/12 mt-3">
//                 <DetailsNewsRow
//                   news={news["Sports"]}
//                   category="Sports"
//                   type="details-news"
//                 />
//                 <DetailsNews news={news["Health"]} category="Health" />
//               </div>

//               <div className="w-full lg:w-4/12 mt-3">
//                 <DetailsNewsCol news={news["Education"]} category="Education" />
//               </div>
              
//             </div>
//           </div>

//           {/* 2nd section  */}

//           {/* <Magazine type="Magazine" news={news["Travel"]} /> */}

//           <div className="w-full">
//             <div className="flex flex-wrap">
//               <div className="w-full lg:w-4/12">
              
//                 {
//                   <div className="pr-2">
//                   <DetailsNewsCol news={news["Politics"]} category="Politics" />
//                 </div>
//                 }
//               </div>
//               <div className="w-full lg:w-8/12">
//                 <div className="pl-2">
//                   <DetailsNewsRow
//                     news={news["Travel"]}
//                     category="Travel"
//                     type="details-news"
//                   />
//                   <DetailsNews news={news["Education"]} category="International" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* 3rd section  */}
//           <Travel type="Travel Treasures" news={news["Travel"]} />

//           <div className="w-full">
//             <div className="flex flex-wrap">
//               <div className="w-full lg:w-8/12">
//                 {/* <div className="pr-2">
//                   <DetailsNewsCol />
//                 </div> */}
//                 <div>
//                   <DetailsNewsRow
//                     news={news["Technology"]}
//                     category="Technology"
//                     type="details-news"
//                   />
//                 </div>
//               </div>
//               <div className="w-full lg:w-4/12">
//                 <div className="pl-2">
                
//                   <div className="grid grid-cols-1 gap-y-[14px]">
//                     <RecentNews />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </main>
//   );
// };

// export default Home;

import BreakingLine from "@/components/BreakingLine";
import LatestNews from "@/components/News/LatestNews";
import Image from "next/image";
import Title from "@/components/Title";
import SimpleNewsCards from "@/components/News/items/SimpleNewsCards";
import PopularNews from "@/components/News/PopularNews";
import DetailsNewsRow from "@/components/News/DetailsNewsRow";
import DetailsNews from "@/components/News/DetailsNews";
import DetailsNewsCol from "@/components/News/DetailsNewsCol";
import NewsCard from "@/components/News/items/NewsCard";
import Magazine from "@/components/News/Magazine";
import Footer from "@/components/Footer";
import axios from "axios";
import Travel from "@/components/News/Travel";
import InsightNews from "@/components/News/InsightNews";
import RecentNews from "@/components/News/RecentNews";

// 👇 YouTube ID Extractor Helper
const extractYouTubeID = (url) => {
  const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^?&]+)/;
  const match = url.match(regex);
  return match ? match[1] : "";
};

const Home = async () => {
  const news_data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/all/news`,
    {
      next: {
        revalidate: 5,
      },
    }
  );
  const { news } = await news_data?.json();

  const liveVideoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/live-video`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const { video: liveVideo } = await liveVideoRes.json();

  return (
    <main>
      <BreakingLine news={news} />
      <div className="bg-white">
        {/* Floating Video */}
        <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 w-[250px] h-[140px] sm:w-[300px] sm:h-[170px] z-50 shadow-lg border border-gray-300 bg-black rounded-md overflow-hidden">
          {liveVideo?.url ? (
            liveVideo.url.includes("youtube.com") ||
            liveVideo.url.includes("youtu.be") ? (
              <iframe
                className="w-full h-full"
                src={
                  liveVideo.url.includes("embed")
                    ? liveVideo.url
                    : `https://www.youtube.com/embed/${extractYouTubeID(
                        liveVideo.url
                      )}`
                }
                title="Live Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                className="w-full h-full"
                controls
                autoPlay
                muted
                src={liveVideo.url}
              ></video>
            )
          ) : (
            <div className="text-white flex items-center justify-center h-full">
              No live video
            </div>
          )}
        </div>

        <div className="px-4 md:px-8 py-8">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12">
              <LatestNews news={news["Education"]} />
            </div>
            <div className="w-full lg:w-6/12 mt-5 lg:mt-0">
              <div className="w-full flex flex-col gap-y-[14px] pl-0 lg:pl-2">
                <Title title="Technology" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                  {news["Technology"].map((item, i) => {
                    if (i < 4) {
                      return <SimpleNewsCards item={item} key={i} />;
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
          <PopularNews type="Top Stories" news={news["Technology"]} />

          {/* first section */}
          <div className="w-full">
            <div className="flex flex-wrap ">
              <InsightNews news={news["Technology"]} category="Health" />
              <div className="w-full lg:w-8/12 mt-3">
                <DetailsNewsRow
                  news={news["Sports"]}
                  category="Sports"
                  type="details-news"
                />
                <DetailsNews news={news["Health"]} category="Health" />
              </div>

              <div className="w-full lg:w-4/12 mt-3">
                <DetailsNewsCol news={news["Education"]} category="Education" />
              </div>
            </div>
          </div>

          {/* 2nd section */}
          <div className="w-full">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12">
                <div className="pr-2">
                  <DetailsNewsCol news={news["Politics"]} category="Politics" />
                </div>
              </div>
              <div className="w-full lg:w-8/12">
                <div className="pl-2">
                  <DetailsNewsRow
                    news={news["Travel"]}
                    category="Travel"
                    type="details-news"
                  />
                  <DetailsNews news={news["Education"]} category="International" />
                </div>
              </div>
            </div>
          </div>

          {/* 3rd section */}
          <Travel type="Travel Treasures" news={news["Travel"]} />

          <div className="w-full">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12">
                <div>
                  <DetailsNewsRow
                    news={news["Technology"]}
                    category="Technology"
                    type="details-news"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12">
                <div className="pl-2">
                  <div className="grid grid-cols-1 gap-y-[14px]">
                    <RecentNews />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Home;
