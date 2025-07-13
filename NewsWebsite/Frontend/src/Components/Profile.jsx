import React from "react";
import {FaImage} from "react-icons/fa6"
const Profile = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-x-6 mt-5">
      <div className="bg-slate-200 gap-x-3 p-6 rounded flex justify-center items-center">
        <div>
          <label htmlFor="img" className={`w-[150px] h-[150px] rounded text-slate-700 gap-2 justify-center flex items-center cursor-pointer border-2 border-dashed`}>
            <div className="flex justify-center  items-center flex-col gap-y-2">
              <span className="text-2xl"><FaImage/></span>
              <span>Select Image</span>

            </div>
          </label>
          <input className="hidden" type="file" id="img" />

        </div>
        <div className="text-black flex flex-col gap-y-1 justify-center items-start">
          <span>Name: Major Sunil Shetty</span>
          <span>Email:ravirathod@gmail.com</span>
          <span>Category:Education</span>

        </div>
      </div>
      <div className="bg-slate-200 px-6 py-4 font-medium text-black ">
        <h2 className="pb-3 text-center">Change Password</h2>
        <form >
                  <div className="grid grid-cols-1 gap-y-5 mb-3">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex flex-col gap-y-2 ">
                <label
                  className="text-md font-medium text-black"
                  htmlFor="old_password"
                >
                 Old Password
                </label>
                <input
                  type="password"
                  name="old_password"
                  placeholder="old password"
                  className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                  id="old_password"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 ">
              <div className="flex flex-col gap-y-2 ">
                <label
                  className="text-md font-medium text-black"
                  htmlFor="new_password"
                >
                 New Password
                </label>
                <input
                  type="password"
                  name="new_password"
                  placeholder=" new password"
                  className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                  id="new_password"
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <button className="px-3 py-[6px] bg-white rounded-sm text-black hover:bg-yellow-600 hover:text-white">
              Change Password
            </button>
          </div>
        </form>


      </div>
    </div>
  );
};

export default Profile;
