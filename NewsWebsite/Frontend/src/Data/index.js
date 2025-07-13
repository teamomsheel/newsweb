// // import { jwtDecode } from "jwt-decode";

// // const decode_token = (token) => {
// //   if (token) {
// //     try {
// //       const decoded_token = jwtDecode(token);
// //       const exp = new Date(decode_token.exp * 1000);
// //       if (new Date() > exp) {
// //         localStorage.removeItem("newToken");
// //         return "";
// //       } else {
// //         return decoded_token;
// //       }
// //     } catch (error) {
// //       return "";
// //     }
// //   } else {
// //     return "";
// //   }
// // };

// // export default decode_token


// import { jwtDecode } from "jwt-decode";

// const decode_token = (token) => {
//   if (token) {
//     try {
//       const decoded_token = jwtDecode(token); 
//       const exp = new Date(decoded_token.exp * 1000); 
//       if (new Date() > exp) {
//         localStorage.removeItem("newToken");
//         return "";
//       } else {
//         return decoded_token;
//       }
//     } catch (error) {
//       console.error("JWT decode failed:", error);
//       return "";
//     }
//   } else {
//     return "";
//   }
// };

// export default decode_token;


import { jwtDecode } from "jwt-decode";

const decode_token = (token) => {
  if (token) {
    try {
      const decoded_token = jwtDecode(token); 
      const exp = new Date(decoded_token.exp * 1000); 
      if (new Date() > exp) {
        localStorage.removeItem("newToken");
        return "";
      } else {
        return decoded_token;
      }
    } catch (error) {
      console.error("Token decoding failed:", error);
      return "";
    }
  } else {
    return "";
  }
};

export default decode_token;
