

// import React, { useState, useEffect ,useContext} from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import StoreContext from "../../Context/StoreContext.js"
// import {useNavigate} from "react-router-dom"
// const Login = () => {
//   const [state, setState] = useState({ email: "", password: "" });
//   const [loader, setLoader] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const {dispatch}=useContext(StoreContext)
//   const navigate=useNavigate()

//   const inputHandle = (e) => {
//     setState({
//       ...state,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const Submit = async (e) => {
//     e.preventDefault();
//     setLoader(true);
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/login",
//         {
//           email: state.email,
//           password: state.password,
//         },
//         { withCredentials: true }
//       );
//       toast.success(res.data.message || "Login successful");
//       localStorage.setItem("newToken",res.token)
//       setIsLoggedIn(true);
      
//       dispatch({
//         type:"login_Successful",
//         payload:{
//           token:res.token
//         }
//       })
//       navigate("/dashboard")

//     } catch (error) {
//       toast.error(error.response?.data?.message || "Login failed");
//     } finally {
//       setLoader(false);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.post("http://localhost:5000/api/logout", {}, { withCredentials: true });
//       toast.success("Logged out successfully");
//       setIsLoggedIn(false);
//       setState({ email: "", password: "" });
//     } catch (error) {
//       toast.error("Logout failed",error);
//     }
//   };

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/login", {
//           withCredentials: true,
//         });
//         if (res.data.email) {
//           setState((prev) => ({ ...prev, email: res.data.email }));
//           setIsLoggedIn(true);
//         }
//       } catch (error) {
//         console.error("Login check error:", error.message);
//       }
//     };
//     checkLoginStatus();
//   }, []);

//   return (
//     <div className="min-w-screen min-h-screen bg-slate-100 flex justify-center items-center">
//       <Toaster />
//       <div className="w-[340px] text-slate-600 shadow-lg">
//         <div className="bg-white h-full px-7 py-8 rounded-md">
//           <div className="w-full flex justify-center items-center">
//             <h2 className="text-[2rem] font-semibold text-yellow-500">MyStartUp News</h2>
//           </div>

//           {!isLoggedIn ? (
//             <form onSubmit={Submit} className="mt-8">
//               <div className="flex flex-col gap-y-2 mt-4">
//                 <label className="text-md font-medium text-gray-600" htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   placeholder="email"
//                   name="email"
//                   onChange={inputHandle}
//                   value={state.email}
//                   required
//                   className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
//                   id="email"
//                 />
//               </div>

//               <div className="flex flex-col gap-y-2 mt-4">
//                 <label className="text-md font-medium text-gray-600" htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   onChange={inputHandle}
//                   value={state.password}
//                   required
//                   placeholder="password"
//                   className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
//                   id="password"
//                 />
//               </div>

//               <div className="mt-4">
//                 <button
//                   type="submit"
//                   disabled={loader}
//                   className={`px-3 py-[10px] w-full rounded-sm text-white ${
//                     loader ? "bg-gray-400" : "bg-purple-500 hover:bg-purple-600"
//                   }`}
//                 >
//                   {loader ? "Logging in..." : "Login"}
//                 </button>
//               </div>
//             </form>
//           ) : (
//             <div className="mt-8 text-center">
//               <p className="text-lg font-medium text-green-600">Logged in as {state.email}</p>
//               <button
//                 onClick={handleLogout}
//                 className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import StoreContext from "../../Context/StoreContext.js";
import { useNavigate } from "react-router-dom";
import decode_token from "../../Data/index.js"; 

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const [loader, setLoader] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { dispatch } = useContext(StoreContext);
  const navigate = useNavigate();

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const Submit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const res = await axios.post(
        "https://newsweb-k4pv.onrender.com/api/login",
        {
          email: state.email,
          password: state.password,
        },
        { withCredentials: true }
      );

      const token = res.data.token;
      toast.success(res.data.message || "Login successful");
      localStorage.setItem("newToken", token);
      setIsLoggedIn(true);

      dispatch({
        type: "login_Successful",
        payload: { token },
      });

      const userInfo = decode_token(token);

      if (userInfo?.role === "admin") {
        navigate("/dashboard/admin");
      } else if (userInfo?.role === "writer") {
        navigate("/dashboard/writer");
      } else {
        navigate("/dashboard"); 
      }

    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoader(false);
    }
  };


  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await axios.get("https://newsweb-k4pv.onrender.com/api/login", {
          withCredentials: true,
        });
        if (res.data.user?.email) {
          setState((prev) => ({ ...prev, email: res.data.user.email }));
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Login check error:", error.message);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("https://newsweb-k4pv.onrender.com/api/logout", {}, { withCredentials: true });
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
    <div className="min-w-screen min-h-screen bg-slate-100 flex justify-center items-center">
      <Toaster />
      <div className="w-[340px] text-slate-600 shadow-lg">
        <div className="bg-white h-full px-7 py-8 rounded-md">
          <div className="w-full flex justify-center items-center">
            <h2 className="text-[2rem] font-semibold text-yellow-500">MyStartUp News</h2>
          </div>

          {!isLoggedIn ? (
            <form onSubmit={Submit} className="mt-8">
              <div className="flex flex-col gap-y-2 mt-4">
                <label className="text-md font-medium text-gray-600" htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  onChange={inputHandle}
                  value={state.email}
                  required
                  className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                  id="email"
                />
              </div>

              <div className="flex flex-col gap-y-2 mt-4">
                <label className="text-md font-medium text-gray-600" htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={inputHandle}
                  value={state.password}
                  required
                  placeholder="password"
                  className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                  id="password"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={loader}
                  className={`px-3 py-[10px] w-full rounded-sm text-white ${
                    loader ? "bg-gray-400" : "bg-purple-500 hover:bg-purple-600"
                  }`}
                >
                  {loader ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-8 text-center">
              <p className="text-lg font-medium text-green-600">Logged in as {state.email}</p>
              <button
                onClick={handleLogout}
                className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
