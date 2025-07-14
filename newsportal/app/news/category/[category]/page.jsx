

// import BreadCrumb from "@/components/breadCrumb";
// import SimpleDetailsNewsCard from "@/components/News/items/SimpleDetailsNewsCard";
// import PopularNews from "@/components/News/PopularNews";
// import Search from "@/components/Search";
// import React from "react";
// import Title from "@/components/Title";
// import NewsCard from "@/components/News/items/NewsCard";
// import RecentNews from "@/components/News/RecentNews";

// const CategoryNews =  async({ params }) => {
//   const { category } = params;

// console.log(category)
// const res=await fetch(`http://localhost:5000/api/category/news/${category}`,{
//   cache:"no-store"
// })

// const data=await res.json();
// const categoryNewsData=data.news
// // console.log(categoryNewsData)
//   return (
//     <div>
//       <div className="bg-white shadow-sm py-4">
//         <div className="px-4 md:px-8 w-full">
//           <BreadCrumb one="category" two={category} />
//           {/* <h3>Category:{category}</h3> */}
//         </div>
//       </div>
//       <div className="bg-slate-300 w-full ">
//         <div className="px-4 md:px-8 w-full py-8">
//           <div className="flex flex-wrap ">
//             <div className="w-full xl:w-8/12">
//               <div className="w-full pr-0 xl:pr-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//                   {
//                  categoryNewsData.map((item, i) => (
//                     <SimpleDetailsNewsCard news={item}
//                       type="details-news"
//                       height={200}
//                       key={i}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="w-full xl:w-4/12 ">
//               <div className="w-full pl-0 xl:pl-4">
//                 <div className="flex flex-col gap-y-6">
//                  <Search />
//                   <RecentNews />
                 
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="pt-2">
//             <PopularNews type="popular news" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryNews;



import BreadCrumb from '@/components/BreadCrumb'
import SimpleDetailsNewsCard from "@/components/News/items/SimpleDetailsNewsCard";
import PopularNews from "@/components/News/PopularNews";
import Search from "@/components/Search";
import React from "react";
import Title from "@/components/Title";
import NewsCard from "@/components/News/items/NewsCard";
import RecentNews from "@/components/News/RecentNews";

const CategoryNews = async ({ params }) => {
  const { category } = params;

  console.log("Category:", category);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/category/news/${encodeURIComponent(category)}`, {
    cache: "no-store",
  });

  const data = await res.json();
  const categoryNewsData = data.news;
  // console.log(categoryNewsData)

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm py-4">
        <div className="px-4 md:px-8 w-full">
          <BreadCrumb one="category" two={category} />
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-slate-300 w-full">
        <div className="px-4 md:px-8 w-full py-8">
          <div className="flex flex-wrap xl:flex-nowrap gap-6">
            
            {/* Left Column (News Cards) */}
            <div className="w-full xl:w-8/12">
              <div className="w-full pr-0 xl:pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoryNewsData.slice(0, 6).map((item, i) => (
                    <SimpleDetailsNewsCard
                      key={i}
                      news={item}
                      type="details-news"
                      height={200}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full xl:w-4/12">
              <div className="w-full pl-0 xl:pl-4">
                <div className="flex flex-col gap-y-6">
                  <Search />
                  <RecentNews />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Popular News */}
          <div className="pt-6">
            <PopularNews type="popular news" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;
