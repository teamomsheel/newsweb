// import React from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import {MdCloudUpload} from "react-icons/md"
// import copy from "copy-text-to-clipboard"
// import toast from "react-hot-toast";
// const Gallary = ({ setShow, images }) => {
//   const copy_url=( url )=>{
//     copy(url)
//     toast.success("copy success")
//   }
//   return (
//     <div className="w-screen h-screen fixed left-0 top-0 z-[9999]">
//       <div className="w-full h-full relative">
//         <div className="bg-slate-600 opacity-80 w-full h-full absolute top-0 left-0 z-[998]"></div>
//         <div className="absolute bg-white w-[50%] p-3 rounded-sm h-[85vh] overflow-y-auto left-[50%] top-[50%] z-[999] -translate-x-[50%] -translate-y-[50%]">
//           <div className="pb-3 flex justify-between items-center w-full">
//             <h2>Gallary</h2>
//             <div
//               onClick={() => setShow(false)}
//               className="text-xl cursor-pointer"
//             >
//               <AiOutlineClose />
//             </div>
//           </div>
//           <div>
//             <label
//               htmlFor="img"
//               className={`w-full h-[180px] rounded text-slate-700 gap-2 justify-center flex items-center cursor-pointer border-2 border-dashed`}
//             >
//               <div className="flex justify-center  items-center flex-col gap-y-2">
//                 <span className="text-2xl">
//                   <MdCloudUpload />
//                 </span>
//                 <span>Select Image</span>
//               </div>
//             </label>
//             {/* <input className="hidden" type="file" id="img" /> */}
//           </div>
//           <div className="grid grid-cols-4 gap-x2 mt-3">
           
//            {
//             images.length>0 && images.map((img,i)=> <div className="p-2 cursor-pointer" onClick={()=>copy_url(img.url)} key={i} >
//               <img src={img.url} alt="images" className="w-full h-[100px]" />
//             </div>)
//            }
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallary;


import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdCloudUpload } from "react-icons/md";
import copy from "copy-text-to-clipboard";
import toast from "react-hot-toast";

const Gallary = ({ setShow, images, imageHandle }) => {
  const copy_url = (url) => {
    copy(url);
    toast.success("Copy success");
  };

  return (
    <div className="w-screen h-screen fixed left-0 top-0 z-[9999]">
      <div className="w-full h-full relative">
        <div className="bg-slate-600 opacity-80 w-full h-full absolute top-0 left-0 z-[998]"></div>
        <div className="absolute bg-white w-[50%] p-3 rounded-sm h-[85vh] overflow-y-auto left-[50%] top-[50%] z-[999] -translate-x-[50%] -translate-y-[50%]">
          <div className="pb-3 flex justify-between items-center w-full">
            <h2>Gallary</h2>
            <div
              onClick={() => setShow(false)}
              className="text-xl cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div>
            <label
              htmlFor="galleryImg"
              className="w-full h-[180px] rounded text-slate-700 gap-2 justify-center flex items-center cursor-pointer border-2 border-dashed"
            >
              <div className="flex justify-center items-center flex-col gap-y-2">
                <span className="text-2xl">
                  <MdCloudUpload />
                </span>
                <span>Select Image</span>
              </div>
            </label>
            <input
              className="hidden"
              type="file"
              id="galleryImg"
              multiple
              onChange={imageHandle}
            />
          </div>
          <div className="grid grid-cols-4 gap-x2 mt-3">
            {images.length > 0 &&
              images.map((img, i) => (
                <div
                  className="p-2 cursor-pointer"
                  onClick={() => copy_url(img.url)}
                  key={i}
                >
                  <img src={img.url} alt="images" className="w-full h-[100px]" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
