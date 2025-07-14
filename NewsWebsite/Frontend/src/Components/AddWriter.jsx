import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import StoreContext from "../Context/StoreContext.js";

const AddWriters = () => {
  const {store}=useContext(StoreContext)
  const [loader,setLoader]=useState(false)
  const navigate=useNavigate()


  const [state,setState]=useState({
    name:"",
    email:"",
    password:"",
    category:""

  })
  const inputHandler=(e)=>{
    setState({
      ...state,
      [e.target.name] : e.target.value 
    })
  }

  const submit = async (e) => {
  e.preventDefault();
  try {
    setLoader(true)
    const { data } = await axios.post(
      "https://newsweb-k4pv.onrender.com/api/news/writer/add",
      state,
      {
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
      }
    );
    setLoader(false)
    toast.success(data.message)
    // console.log("News added:", data);
    navigate("/dashboard/writers")
  } catch (error) {
    toast.error(error.response.data.message);
    setLoader(false)
  }
};

  return (
    <div className="bg-pink-300 rounded">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium text-white">Add Writers</h2>
        <Link
          className="px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600 hover:text-white"
          to="/dashboard/writers"
        >
          Writers
        </Link>
      </div>
      <div className="p-4">
        <form onSubmit={submit}>
          <div className="grid grid-cols-2 gap-x-8 mb-3">
            <div className="flex flex-col gap-y-2 ">
              <label
                className="text-md font-medium text-gray-600"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={inputHandler}
                required
                value={state.name}
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-y-2 ">
              <label
                className="text-md font-medium text-gray-600"
                htmlFor="category"
              >
                Category
              </label>
              <select
                type="text"
                name="category"
                onChange={inputHandler}
                value={state.category}
                required
                placeholder="category"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                id="category"
              >
                <option value="">----Select Category----</option>
                <option value="Education">Education</option>
                <option value="Travel">Travel</option>
                <option value="Health">Health</option>
                <option value="Sports">Sports</option>
                <option value="Politics">Politics</option>
                <option value="entertainment">Entertainment</option>
                <option value="Technology">Technology</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 mb-3">
            <div className="flex flex-col gap-y-2 ">
              <label
                className="text-md font-medium text-gray-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={inputHandler}
                value={state.email}
                required
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-y-2 ">
              <div className="flex flex-col gap-y-2 ">
                <label
                  className="text-md font-medium text-gray-600"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={inputHandler}
                  value={state.password}
                  placeholder="password"
                  className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                  id="password"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button disabled={loader} className="px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600 hover:text-white">
              {loader ? "Loading..." : "writer added"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWriters;
