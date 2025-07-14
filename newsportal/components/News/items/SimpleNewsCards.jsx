

import React from "react";
import Image from "next/image";
import Link from "next/link";
const SimpleNewsCards = ({item,type}) => {
  return (
    <div className="group relative">
      <div className="overflow-hidden">
        <div className={`${type ? "h-[270px] sm:h-[470px]" : "h-[228px]"} w-full group-hover:scale-[1.1] transition-all duration-[1s]`}>
          <Image
          // className=""
            fill
            src={item.image}
            alt="images"
           
            style={{ objectFit: "cover", backgroundRepeat:"no-repeat" }}
          
          />
        </div>
      </div>
      <div
        className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"
       
      >
        {" "}
      </div>
      <div className="left-5 absolute bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-y-2">
        <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-amber-300">
          {item.category}
        </div>
        <Link   href={`/news/${item.slug}`} className=" text-xl text-white hover:text-yellow-500">{item.title}</Link>
        <div className="flex gap-x-2 text-sm font-normal">
            <span>{item.date}</span>
            <span>{item.writerName}</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleNewsCards;


// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const SimpleNewsCards = ({ item, type }) => {
//   const hasImage = item?.image && item.image !== "";

//   return (
//     <div className="group relative">
//       <div className="overflow-hidden">
//         <div
//           className={`${
//             type ? "h-[270px] sm:h-[470px]" : "h-[228px]"
//           } w-full relative group-hover:scale-[1.1] transition-all duration-[1s]`}
//         >
//           {hasImage ? (
//             <Image
//               fill
//               src={item.image}
//               alt={item.title || "news image"}
//               style={{
//                 objectFit: "cover",
//                 backgroundRepeat: "no-repeat",
//               }}
//             />
//           ) : (
//             <div className="bg-gray-200 w-full h-full flex items-center justify-center text-sm text-gray-500">
//               No Image Available
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Transparent overlay for hover effect */}
//       <div
//         className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"
//         aria-hidden
//       />

//       {/* Text content */}
//       <div className="left-5 absolute bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-y-2">
//         <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-amber-300">
//           {item.category}
//         </div>
//         <Link
//           href={`/news/${item.slug}`}
//           className="text-xl text-white hover:text-yellow-500"
//         >
//           {item.title}
//         </Link>
//         <div className="flex gap-x-2 text-sm font-normal">
//           <span>{item.date}</span>
//           <span>{item.writerName}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SimpleNewsCards;
