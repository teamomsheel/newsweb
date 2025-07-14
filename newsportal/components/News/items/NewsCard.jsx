// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// const NewsCard = ({ item }) => {
//   // console.log(item)

//   return (
//     <div className="bg-white shadow flex p-4">
//       <div className="relative group overflow-hidden h-full  ">
//         <div className="group-hover:scale-[1.1] transition-all duration-[1s] w-[100px] md:w-[160px] h-[94px] lg:w-[100px]">
//           <Image
//             fill
//             src={item?.image}
//             alt="images"
//             style={{ objectFit: "cover", backgroundRepeat: "no-repeat" }}
//           />

//           <div className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"></div>
//         </div>
//       </div>
//       <div className="flex flex-col gap-y-2 w-[calc(100%-100px)] md:w-[calc(100%-160px)] h-[94px] lg:w-[calc(100%-100px)] pl-3">
//         <Link
//           href={`/news/category/${item?.category}`}
//           className="text-sm font-semibold text-amber-500"
//         >
//           {item?.category}
//         </Link>
//         <Link
//           href={`/news/category/${item?.slug}`}
//           className="text-sm font-semibold text-[#333333] hover:text-amber-500"
//         >
//           {item?.title}
//         </Link>
//         <div className="flex gap-x-2 text-xs font-normal text-slate-400">
//           <span>{item?.date}</span>
//           <span>{item?.writerName}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;


import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ item }) => {
  return (
    <div className="bg-white shadow flex p-4">
      <div className="relative group overflow-hidden h-full">
        <div className="group-hover:scale-[1.1] transition-all duration-[1s] w-[100px] md:w-[160px] h-[94px] lg:w-[100px]">
          <Image
            fill
            src={item?.image}
            alt="images"
            style={{ objectFit: "cover", backgroundRepeat: "no-repeat" }}
          />
          <div className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"></div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 w-[calc(100%-100px)] md:w-[calc(100%-160px)] h-[94px] lg:w-[calc(100%-100px)] pl-3">
        <Link
          href={`/news/category/${item?.category}`}
          className="text-sm font-semibold text-amber-500"
        >
          {item?.category}
        </Link>
        <Link
          href={`/news/${item?.slug}`}
          className="text-sm font-semibold text-[#333333] hover:text-amber-500"
        >
          {item?.title}
        </Link>
        <div className="flex gap-x-2 text-xs font-normal text-slate-400">
          <span>{item?.date}</span>
          <span>{item?.writerName}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
