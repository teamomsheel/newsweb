// "use client";
// import React, { useEffect, useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import SimpleNewsCards from "./items/SimpleNewsCards";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import axios from "axios";

// const LatestNews = () => {

//   const [news,setNews]=useState([])

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 1,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   const latest_news_get=async()=>{
//     try {
//       const res=await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/latest/news`)
//       const data=await res.json()
//       setNews(data.news)
//       console.log(data)

//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(()=>{
//      latest_news_get()
//   },[])

//   const ButtonGroup = ({ next, previous }) => {
//     return (
//       <div className="flex justify-between items-center">
//         <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-red-500 before:h-full before:-left-0 pl-3  ">
//           Latest News
//         </div>
//         <div className="flex justify-center items-center gap-x-3 ">
//           <button
//             onClick={() => previous()}
//             className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200"
//           >
//             <span>
//               <FiChevronLeft />
//             </span>
//           </button>
//           <button
//             onClick={() => next()}
//             className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200"
//           >
//             <span>
//               <FiChevronRight />
//             </span>
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="w-full flex flex-col-reverse gap-3 pr-0 lg:pr-2 ">
//       <Carousel
//         autoPlay={true}
//         arrows={false}
//         renderButtonGroupOutside={true}
//         customButtonGroup={<ButtonGroup />}
//         responsive={responsive}
//         infinite={true}
//         transitionDuration={500}
//       >
//         {
//         news.map((item, i) => (
//           <SimpleNewsCards item={item} key={i} type="latest" />
//         ))
//         }
//       </Carousel>
//     </div>
//   );
// };

// export default LatestNews;

"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SimpleNewsCards from "./items/SimpleNewsCards";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const LatestNews = () => {
  const [news, setNews] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const latest_news_get = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/latest/news`,
        {
          method: "GET",
          credentials: "include", 
        }
      );
      const data = await res.json();
      setNews(data.news);
      console.log("Latest news:", data);
    } catch (error) {
      console.error("Error fetching latest news:", error);
    }
  };

  useEffect(() => {
    latest_news_get();
  }, []);

  const ButtonGroup = ({ next, previous }) => (
    <div className="flex justify-between items-center">
      <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-red-500 before:h-full before:-left-0 pl-3">
        Latest News
      </div>
      <div className="flex gap-x-3">
        <button onClick={previous} className="w-[30px] h-[30px] bg-white border border-slate-200 flex items-center justify-center">
          <FiChevronLeft />
        </button>
        <button onClick={next} className="w-[30px] h-[30px] bg-white border border-slate-200 flex items-center justify-center">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col-reverse gap-3 pr-0 lg:pr-2">
      <Carousel
        autoPlay={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        responsive={responsive}
        infinite={true}
        transitionDuration={500}
      >
        {news.map((item, i) => (
          <SimpleNewsCards item={item} key={i} type="latest" />
        ))}
      </Carousel>
    </div>
  );
};

export default LatestNews;

