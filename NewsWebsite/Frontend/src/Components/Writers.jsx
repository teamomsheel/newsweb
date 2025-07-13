import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpeg";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import StoreContext from "../Context/StoreContext.js";
import { useState } from "react";


const Writers = () => {
  const {store}=useContext(StoreContext)
  const [writers,setWriters]=useState([])

  const get_writers=async()=>{
    try {
      const {data}=await axios.get("https://newsweb-1-45eo.onrender.com/api/news/writers",{

        headers:{
          Authorization:`Bearer ${store.token}`
        }


      })
      console.log(data)
      setWriters(data.writers)
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(()=>{
    get_writers()

  },[])

  return (
    <div className="bg-slate-200 rounded">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium text-white">Add Writers</h2>
        <Link
          className="px-3 py-[6px] bg-white rounded-sm text-black hover:bg-purple-600 hover:text-white"
          to="/dashboard/writer/add"
        >
          Add Writers
        </Link>
      </div>
      <div className="relative overflow-x-auto p-4">
        <table className="w-full text-sm text-left text-slate-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-7 py-3">No</th>
              <th className="px-7 py-3">Reporter Name</th>
              <th className="px-7 py-3">category</th>
              <th className="px-7 py-3">Role</th>
              <th className="px-7 py-3">image</th>
              <th className="px-7 py-3">Email</th>
              <th className="px-7 py-3">action</th>
            </tr>
          </thead>
          <tbody>
            {writers.map((value, i) => (
              <tr key={i} className="bg-white border-b">
                <td className="px-6 p-4">{i+1}</td>
                <td className="px-6 p-4">{value.name}</td>
                <td className="px-6 p-4">{value.category}</td>
                <td className="px-6 p-4">{value.role}</td>
                <td className="px-6 p-4">
                  <img className="w-[40px] h-[40px]" src={img1} alt="image" />
                </td>
                <td className="px-6 p-4">{value.email}</td>
                {/* <td className="px-6 p-4">
                  <span className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer">
                    active
                  </span>
                </td> */}
                <td className="px-6 p-4">
                  <div className="flex justify-start items-center gap-x-4 text-white">
                    <Link to={`/dashboard/writer/${value._id}`} className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
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
  );
};

export default Writers;
