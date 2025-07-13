// import React, { useState } from "react";
// import { FiUpload } from "react-icons/fi";
// import axios from "axios";
// import StoreContext from "../Context/StoreContext";
// import { useContext } from "react";
// const MagazineUpload = () => {
//   const {store} =useContext(StoreContext)
//   const [type, setType] = useState("file");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [file, setFile] = useState(null);
//   const [url, setUrl] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!title) return alert("Title is required");

//     const form = new FormData();
//     form.append("title", title);
//     form.append("description", description);
//     form.append("type", type);
//     if (type === "file" && file) form.append("file", file);
//     if (type === "url") form.append("url", url);

//     const token = localStorage.getItem("newToken");
   
// // console.log(token)
//     if (!token) {
//       alert("You must be logged in to upload a magazine.");
//       return;
//     }

//     try {
  
//       const res = await axios.post(`http://localhost:5000/api/magazine/add`, form, {
//         headers: {
  
//           Authorization: `Bearer ${store.token}`,
//         },
//         withCredentials: true,
//       });
//       console.log(res)

//       alert("Magazine uploaded successfully!");
//       setTitle("");
//       setDescription("");
//       setFile(null);
//       setUrl("");
//     } catch (err) {
//       console.error("Upload error:", err);
//       alert("Upload failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-xl mx-auto">
//       <div className="flex items-center gap-2 mb-4">
//         <FiUpload className="text-2xl text-blue-600" />
//         <h2 className="text-xl font-semibold">Upload Magazine</h2>
//       </div>

//       <form onSubmit={handleUpload} className="flex flex-col gap-4">
//         <input
//           type="text"
//           placeholder="Magazine Title"
//           className="border rounded p-2"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />

//         <textarea
//           placeholder="Description (optional)"
//           className="border rounded p-2"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <select
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           className="border rounded p-2"
//         >
//           <option value="file">Upload PDF File</option>
//           <option value="url">Use Magazine URL</option>
//         </select>

//         {type === "file" ? (
//           <input
//             type="file"
//             accept=".pdf"
//             onChange={(e) => setFile(e.target.files[0])}
//             className="border rounded p-2"
//           />
//         ) : (
//           <input
//             type="text"
//             placeholder="Magazine URL (e.g., PDF link)"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//             className="border rounded p-2"
//           />
//         )}

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//         >
//           {loading ? "Uploading..." : "Upload Magazine"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default MagazineUpload;

import React, { useContext, useState } from "react";
import axios from "axios";
import StoreContext from "../Context/StoreContext";

const MagazineUpload = () => {
  const { store } = useContext(StoreContext);
  const [type, setType] = useState("file");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title) return alert("Title is required");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("type", type);
    if (type === "file") formData.append("file", file);
    else formData.append("url", url);

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/magazine/add", formData, {
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
        withCredentials: true,
      });
      alert("Uploaded!");
      setTitle("");
      setDescription("");
      setFile(null);
      setUrl("");
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded">
      <h2 className="text-xl font-semibold mb-4">Upload Magazine</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border rounded" required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="w-full p-2 border rounded" />
        <select value={type} onChange={(e) => setType(e.target.value)} className="w-full p-2 border rounded">
          <option value="file">Upload File</option>
          <option value="url">Use URL</option>
        </select>
        {type === "file" ? (
          <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} required />
        ) : (
          <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Magazine URL" required className="w-full p-2 border rounded" />
        )}
        <button type="submit" disabled={loading} className="w-full py-2 bg-blue-600 text-white rounded">
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default MagazineUpload;
