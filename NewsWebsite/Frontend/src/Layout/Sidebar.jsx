import React, { useContext, useState } from 'react'
// import { Outlet } from 'react-router-dom'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from "../assets/MystartupLife.png"
import { AiFillDashboard, AiOutlinePlus } from "react-icons/ai"
import { ImProfile } from "react-icons/im"
import { BiNews } from "react-icons/bi"
import { FiUsers, FiUpload } from "react-icons/fi"
import { FiLogOut } from "react-icons/fi"
import { FaPlus } from 'react-icons/fa6'
import StoreContext from '../Context/StoreContext.js'
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";



const Sidebar = () => {
  const { store, dispatch } = useContext(StoreContext)
  const { pathname } = useLocation()
  const [state, setState] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/logout", {}, { withCredentials: true });
      toast.success("Logged out successfully");
      setIsLoggedIn(false);
      localStorage.removeItem("newToken");
      dispatch({ type: "logout_Successful" });
      setState({ email: "", password: "" });
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
      console.error(error);
    }
  };
  return (
    <div className='w-[250px] h-screen fixed left-0 right-0 bg-slate-200 text-white '>

      <div className='h-[70px] flex justify-center items-center p-6'>
        <Link to="/">
          <img src={logo} alt="MystartupLife" />
        </Link>

      </div>
      <ul className='px-3 flex flex-col gap-y-2 font-medium '>
        {
          store.userInfo?.role === "admin" ? <>

            <li >
              <Link to='/dashboard/admin' className={`text-black ${pathname === "/dashboard/admin" ? "bg-indigo-300 text-black" : "bg-slate-200"} px-3 py-4 hover:shadow-lg hover:shadow-indigo-800/20 w-full rounded-sm flex gap-2 justify-start items-center hover:bg-indigo-300 hover:text-white`}>
                <span className='text-xl'><AiFillDashboard /></span>
                <span>Dashboard</span>
              </Link>
            </li>

            {/* <li >
        <Link to='/dashboard/writer/add' className={`text-black ${pathname ==="/dashboard/writer/add"? "bg-indigo-800 text-white" : "bg-slate-200"} px-3 py-4 hover:shadow-lg hover:shadow-indigo-800/20 w-full rounded-sm flex gap-2 justify-start items-center hover:bg-indigo-300 hover:text-white`}>
        <span className='text-xl'><AiOutlinePlus/></span>
        <span>Add Writer</span>
        </Link>
      </li> */}
            <li >
              <Link to='/dashboard/writers' className={`text-black ${pathname === "/dashboard/writers" ? "bg-indigo-300 text-white" : "bg-slate-200"} px-3 py-4 hover:shadow-lg hover:shadow-indigo-800/20 w-full rounded-sm flex gap-2 justify-start items-center hover:bg-indigo-300 hover:text-white`}>
                <span className='text-xl'><FiUsers /></span>
                <span>Writers</span>
              </Link>
            </li>
            <li >
              <Link to='/dashboard/magazine' className={`text-black ${pathname === "/dashboard/magazine" ? "bg-indigo-300 text-white" : "bg-slate-200"} px-3 py-4 hover:shadow-lg hover:shadow-indigo-800/20 w-full rounded-sm flex gap-2 justify-start items-center hover:bg-indigo-300 hover:text-white`}>
                <span className='text-xl'>< FiUpload /></span>
                <span>magazine</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/live-video/upload"
                className={`text-black ${pathname === "/dashboard/live-video/upload"
                    ? "bg-indigo-300 text-white"
                    : "bg-slate-200"
                  } px-3 py-4 hover:shadow-lg hover:shadow-indigo-800/20 w-full rounded-sm flex gap-2 justify-start items-center hover:bg-indigo-300 hover:text-white`}
              >
                <span className="text-xl"><FiUpload /></span>
                <span>Live Video</span>
              </Link>
            </li>

          </> : <>

            <li >
              <Link to='/dashboard/writer' className={`text-black ${pathname === "/dashboard/writer" ? "bg-indigo-300 text-black" : "bg-slate-200"} px-3 py-4 hover:shadow-lg hover:shadow-indigo-800/20 w-full rounded-sm flex gap-2 justify-start items-center hover:bg-indigo-300 hover:text-white`}>
                <span className='text-xl'><AiFillDashboard /></span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li >
              <Link to='/dashboard/news/create' className={`text-black ${pathname === "/dashboard/news/create" ? "bg-indigo-300 text-white" : "bg-slate-200"} px-3 py-4 hover:shadow-lg hover:shadow-indigo-800/20 w-full rounded-sm flex gap-2 justify-start items-center hover:bg-indigo-300 hover:text-white`}>
                <span className='text-xl'><FaPlus /></span>
                <span>Add News</span>
              </Link>
            </li>
          </>
        }

        <li >
          <Link to='/dashboard/news' className={`text-black ${pathname === "/dashboard/news" ? "bg-indigo-300 text-white" : "bg-slate-200"} px-3 py-4 hover:shadow-lg hover:shadow-indigo-800/20 w-full rounded-sm flex gap-2 justify-start items-center hover:bg-indigo-300 hover:text-white`}>
            <span className='text-xl'><BiNews /></span>
            <span>News</span>
          </Link>
        </li>

        <li >
          <Link to='/dashboard/profile' className={`text-black ${pathname === "/dashboard/profile" ? "bg-indigo-300 text-white" : "bg-slate-200"} px-3 py-4 hover:shadow-lg hover:shadow-indigo-800/20 w-full rounded-sm flex gap-2 justify-start items-center hover:bg-indigo-300 hover:text-white`}>
            <span className='text-xl'><ImProfile /></span>
            <span>Profile</span>
          </Link>
        </li>
        <li >
          <div onClick={handleLogout} className={`text-black ${pathname === "/dashboard/logout" ? "bg-red-300 text-white" : "bg-slate-200"} px-3 py-4 hover:shadow-lg hover:shadow-red-800 w-full rounded-sm flex gap-2 justify-start items-center hover:bg-red-400 hover:text-white cursor-pointer`}>
            <span className='text-xl'><FiLogOut /></span>
            <span>Logout</span>
          </div>
        </li>


      </ul>

    </div>
  )
}

export default Sidebar