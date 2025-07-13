import React from "react";
// import Sidebar from "../../Layout/Sidebar"
import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../../assets/img1.jpeg";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
const Admindashboard = () => {
  const {pathname}=useLocation()
  const navigate=useNavigate()
  const moveTomagazineData=()=>{
    navigate("/dashboard/magazineTable")
  }
  return (
    <div className="mt-2">
      <div className="grid grid-cols-6 gap-x-6">
        
        <div className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-slate-200 text-black">
          <span className="text-xl font-bold">50</span>
          <span className="text-md"> Total News</span>
        </div>
        <div className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-slate-200 text-black">
          <span className="text-xl font-bold">10</span>
          <span className="text-md"> Pending News</span>
        </div>
        <div className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-slate-200 text-black">
          <span className="text-xl font-bold">25</span>
          <span className="text-md"> Aactive News</span>
        </div>
        <div className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-slate-200 text-black">
          <span className="text-xl font-bold">15</span>
          <span className="text-md"> Deactive News</span>
        </div>
        <div className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-slate-200 text-black">
          <span className="text-xl font-bold">5</span>
          <span className="text-md"> Writers News</span>
        </div>
          <button
          onClick={moveTomagazineData}
          className={`text-block w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-slate-200 text-black ${
            pathname === "/dashboard/magazineTable" ? "bg-slate-300 font-semibold" : ""
          }`}
        >
          <span className="text-md">Total Magazines</span>
          <span className="text-md">Magazines</span>
        </button>
      </div>
      <div className="p-4 mt-5 bg-slate-200">
        <div className="flex justify-between items-center pb-4">
          <h2>Recent News</h2>
          <Link>View All</Link>
        </div>
        <div className="relative overflow-x-auto p-4">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-7 py-3">No</th>
                <th className="px-7 py-3">title</th>
                <th className="px-7 py-3">image</th>
                <th className="px-7 py-3">categore</th>
                <th className="px-7 py-3">Description</th>
                <th className="px-7 py-3">date</th>
                <th className="px-7 py-3">status</th>
                <th className="px-7 py-3">active</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7].map((n, i) => (
                <tr key={i} className="bg-white border-b">
                  <td className="px-6 p-4">1</td>
                  <td className="px-6 p-4">India gets its longest glass b..</td>
                  <td className="px-6 p-4">
                    <img className="w-[40px] h-[40px]" src={img1} alt="image" />
                  </td>
                  <td className="px-6 p-4">Travel</td>
                  <td className="px-6 p-4">You all must have wat...</td>
                  <td className="px-6 p-4">Jun 13,2025</td>
                  <td className="px-6 p-4">
                    <span className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer">
                      active
                    </span>
                  </td>
                  <td className="px-6 p-4">
                    <div className="flex justify-start items-center gap-x-4 text-white">
                      <Link className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
                        <FaEye />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
