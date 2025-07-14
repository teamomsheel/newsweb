"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import axios from "axios";

const Navbar = () => {
  const path = usePathname();

  // const data = [
  //   { id: 1, name: "news" },
  //   { id: 2, name: "sports" },
  //   { id: 3, name: "Interviews" },
  //   { id: 4, name: "innovation" },
  //   // { id: 4, name: "Education" },
  //   { id: 5, name: "Technology" },
  //   // { id: 6, name: "Travel" },
  //   { id: 6, name: "Contact Us"}
  // ];

const [categories, setCategories] = useState([]);

const get_categories = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/category/all`);
   
    setCategories(res.data.categories);
   
  } catch (error) {
    console.error("Axios error fetching categories:", error);
  }
};

useEffect(() => {
  get_categories();
}, []);


  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-[#facc15] w-full text-white uppercase font-semibold relative">
        <div className="px-8 flex justify-between items-center relative h-[48px]">
          <div
            onClick={() => setView(!view)}
            className={`text-3xl flex lg:hidden font-bold h-full w-[48px] cursor-pointer justify-center items-center ${
              view ? "bg-[#00000030]" : ""
            } hover:bg-[#00000030]`}
          >
            <BsList />
          </div>
          <div className="flex-wrap hidden lg:flex">
            <Link
              className={`px-6 font-medium py-[13px] ${
                path === "/" ? "bg-[#00000030]" : ""
              }`}
              href="/"
            >
              Home
            </Link>
            {
            
            categories.length>0 && categories.map((c,i) => 
              <Link
                key={i}
                href={`/news/category/${c.category}`}
                className={`px-6 font-medium py-[13px] ${
                  path === c.category ? "bg-[#00000030]" : ""
                }`}
              >
                {c.category}
              </Link>
            )}
          </div>

          <div className="h-full w-[48px]">
            <div
              onClick={() => setShow(!show)}
              className={`text-xl ${
                show ? "bg-[#00000030]" : ""
              } font-bold h-full w-full cursor-pointer flex justify-center items-center hover:bg-[#00000030]`}
            >
              {show ? <IoClose /> : <AiOutlineSearch />}
            </div>

            <div
              className={`absolute lg:block transition-all text-slate-500 z-20 shadow-lg lg:right-10 top-[50px] w-full lg:w-auto right-0 ${
                show ? "visible" : "invisible"
              }`}
            >
              <div className="p-3 bg-white">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="w-full  sm:w-[250px] md:w-[300px] lg:w-[350px] h-[40px]">
                    <input
                      type="text"
                      placeholder="Search"
                      className="h-full w-full p-2 border border-slate-400 outline-none bg-slate-100 text-sm"
                    />
                  </div>
                  <div className="w-full sm:w-[45px] h-[40px] flex justify-center items-center bg-red-600 text-white text-xl cursor-pointer hover:bg-amber-700">
                    <AiOutlineSearch />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {view && (
        <div className="flex flex-wrap lg:hidden py-2 px-[30px]">
          <Link
            className={`px-4 font-medium py-[5px] ${
              path === "/" ? "bg-[#00000030]" : ""
            }`}
            href="/"
          >
            Home
          </Link>
          {data.map((c) => (
            <Link
              key={c.id}
              href="/"
              className={`px-4 font-medium py-[5px] ${
                path === c.name ? "bg-[#00000030]" : ""
              }`}
            >
              {c.category}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
