// "use client"
// import React from "react";
// import LoadingSpinner from "react-spinners-components";
// import Marquee from "react-fast-marquee";
// import Link from "next/link";
// import { headlines } from "../Utils/headlines.js";
// const BreakingLine = ({news}) => {
//   return (
//     <div className="bg-white flex flex-wrap">
//       <div className="flex md:w-[170px] w-full bg-slate-200 relative after:absolute after:bg-slate-200 after:w-[20px] after:left-[160px] after:skew-x-[20deg] after:top-0 after:bottom-0 after:z-30">
//         <div className="md:pl-8 pl-4 w-full py-2 flex justify-start items-center gap-x-1">
//           <span>
//             <LoadingSpinner
//               type="Ripple"
//               color={["#800000", "c80000"]}
//               size={"30px"}
//             />
//           </span>
//           <h2 className="text-[#333333] font-semibold text-lg">Headlines</h2>
//         </div>
//       </div>
//       <div className="flex md:w-[calc(100%-170px)] w-full">
//         <div className="flex w-full justify-start items-center">
//           <Marquee>
//             {
            
//             Object.keys(news).length > 0 &&
//              Object.keys(news).map((c, i) => <>
//              {
//                news[c].length >0 && news[c].map((n,j)=> <Link  key={n.id || `${c}-${j}`} className="py-3 block font-semibold hover:text-amber-200 pr-12 text-sm" href={"#"} >
//                 {n.title}

//                </Link>
//                ) 
//              }
//              </>
//             )}
//           </Marquee>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BreakingLine;


"use client";
import React from "react";
import LoadingSpinner from "react-spinners-components";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const BreakingLine = ({ news }) => {
  return (
    <div className="bg-white flex flex-wrap">
      {/* Headlines label */}
      <div className="flex md:w-[170px] w-full bg-slate-200 relative after:absolute after:bg-slate-200 after:w-[20px] after:left-[160px] after:skew-x-[20deg] after:top-0 after:bottom-0 after:z-30">
        <div className="md:pl-8 pl-4 w-full py-2 flex justify-start items-center gap-x-1">
          <span>
            <LoadingSpinner
              type="Ripple"
              color={["#800000", "c80000"]}
              size={"30px"}
            />
          </span>
          <h2 className="text-[c333333] font-semibold text-lg">Headlines</h2>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="flex md:w-[calc(100%-170px)] w-full">
        <div className="flex w-full justify-start items-center overflow-hidden whitespace-nowrap">
          <Marquee gradient={false} pauseOnHover={true} speed={60}>
            {Object.keys(news).length > 0 &&
              Object.keys(news).flatMap((c) =>
                news[c].map((n, j) => (
                  <Link
                    key={n.id || `${c}-${j}`}
                    className="py-3 block font-semibold hover:text-amber-500 pr-12 text-sm whitespace-nowrap"
                    href={`/news/${n.slug}`}
                  >
                    {n.title}
                  </Link>
                ))
              )}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BreakingLine;
