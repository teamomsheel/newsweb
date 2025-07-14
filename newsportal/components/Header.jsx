"use client";

import React from "react";
import Image from "next/image";
import moment from "moment";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import bg_header from "../assets/hadderbg.jpg";
import mystartupnewsimg from "../assets/mystartupnews.png";
import ads from "../assets/ads.jpeg";
import Navbar from "./Navbar";
import newsimg from "../assets/News.png";
import LiveTimeUpdate from "../components/LiveTimeUpdate"
const Header = () => {
  // const handlebgimag={

  // }
  return (
    <div>
      <div className="flex flex-col justify-center items-center md:items-center bg-white">
        <Image className="w-[200px] h-[100px]" src={newsimg} alt="newsImg" />
      </div>
      <div className="px-5 lg:px-8 flex justify-between items-center bg-[#333333] text-[#cccccc]">
        <span className="text-[13px] font-medium">
          <LiveTimeUpdate />
        </span>

        <div className="flex justify-between gap-2">
          <a
            className="w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b] text-blue-400 hover:scale-110 transition-transform"
            href="https://www.facebook.com/mystartuptvin/"
          >
            <FaFacebookF />
          </a>
          <a
            className="w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b] text-blue-600 hover:scale-110 transition-transform"
            href="https://x.com/mystartuptvin/"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.instagram.com/mystartuptvin/?hl=en"
            title="Instagram"
            className="text-pink-500 w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b] hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>
          <a
            className="w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b] text-red-500 hover:scale-110 transition-transform"
            href="https://www.youtube.com/@MyStartupTV"
          >
            <AiFillYoutube />
          </a>
        </div>
      </div>
      <div
        className="w-full h-[200px]"
        style={{
          backgroundImage: `url(${bg_header.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="px-8 py-14">
          <div className="flex justify-center md:justify-between items-center flex-wrap">
            <div className="md:w-4/12 w-full">
              <div className="flex flex-col justify-center items-center md:items-start">
                <Image
                  className="w-[200px] h-[45px]"
                  src={newsimg}
                  alt="newsImg"
                />
              </div>
            </div>
            <div className="md:w-8/12 w-full hidden md:block">
              <div className="flex w-full justify-end ">
                <Image src={ads} alt="dropads" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
