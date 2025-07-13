// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(401).json({ message: "Access denied. No token provided." });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

// module.exports = verifyToken;

// const jwt = require("jsonwebtoken");

// const auth = async (req, res, next) => {
//   const { authorization } = req.headers;
//   // console.log(authorization);

//   if (authorization) {
//     const token = authorization.split(" ")[1];
//     // console.log(token);

//     if (token) {
//       try {
//         const userInfo = await jwt.verify(token, process.env.JWT_SECRET);
//         // console.log(userInfo)
//         req.userInfo = userInfo;
//         next();
//       } catch (error) {
//         return res.status(401).json({ message: "Unauthorized" });
//       }
//     } else {
//       return res.status(401).json({ message: "Unauthorized - token missing" });
//     }
//   } else {
//     return res.status(401).json({ message: "Unauthorized no auth headers"  });
//   }
// };

// const role=async(req,res,next)=>{
//     // console.log(req.userInfo)

//     const {userInfo}=req

//     if(userInfo.role ==="admin"){
//         next()
//     }else{
//     return res.status(401).json({ message: "Unable to access this api" });

//     }
// }

// module.exports = {auth,role};


const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).json({ message: "Unauthorized: No auth headers" });

  const token = authorization.split(" ")[1];
  if (!token)
    return res.status(401).json({ message: "Unauthorized: Token missing" });

  try {
    const userInfo = jwt.verify(token, process.env.JWT_SECRET);
    req.userInfo = userInfo;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

const role = async (req, res, next) => {
  const { userInfo } = req;
  if (userInfo?.role === "admin") {
    next();
  } else {
    return res.status(401).json({ message: "Access denied: Admins only" });
  }
};

module.exports = { auth, role };
