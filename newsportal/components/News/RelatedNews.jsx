import React from 'react'
import Title from '../Title';
import SimpleDetailsNewsCard from './items/SimpleDetailsNewsCard';
const RelatedNews = ({news,type}) => {
  return (
 <div className=" w-full pb-8 mt-5">
      <div className="flex flex-col w-full gap-y-[14px]">
        <Title title="Related News" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 sm:gap-3 lg:gap-x-3">
          {
          news.length> 0 && news.map((item, i) => {

            if (i < 4) {
              return (
                <SimpleDetailsNewsCard
                  news={item}
                  type={type}
                  item={item}
                  key={i}
                  height={250}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default RelatedNews

// import React from "react";
// import Title from "../Title";
// import SimpleDetailsNewsCard from "./items/SimpleDetailsNewsCard";

// const PopularNews =async({ type, news }) => {

//    const res= await fetch(`http://localhost:5000/api/popular/news`,{
//     next:{
//       revalidate:1,
//     }
//   })

//   const {popularNews}= await res.json()
//   console.log(popularNews)
//   // console.log(news)
//   return (
//     <div className=" w-full pb-8 mt-5">
//       <div className="flex flex-col w-full gap-y-[14px]">
//         <Title title="Top Stories" />
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 sm:gap-3 lg:gap-x-3">
//           {
//            popularNews.length>0 && popularNews.map((item, i) => {

//             if (i < 4) {
//               return (
//                 <SimpleDetailsNewsCard
//                   news={item}
//                   type={type}
//                   item={item}
//                   key={i}
//                   height={250}
//                 />
//               );
//             }
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularNews;
