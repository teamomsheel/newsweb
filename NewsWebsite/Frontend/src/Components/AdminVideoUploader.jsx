import React, {useContext, useState } from "react";
import axios from "axios";
import { FiUpload } from "react-icons/fi";
import StoreContext from "../Context/StoreContext";
const AdminVideoUploader = () => {
  const {store}=useContext(StoreContext)
  const [uploadType, setUploadType] = useState("file"); 
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
    setMessage("");
    setProgress(0);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("newToken");
    // console.log(token)

    if (!token) return setMessage("Unauthorized. Please log in.");

    const formData = new FormData();
    formData.append("uploadType", uploadType);

    if (uploadType === "file") {
      if (!videoFile) return setMessage("❗ Please select a video file.");
      formData.append("video", videoFile);
    } else if (uploadType === "url") {
      if (!videoUrl.trim()) return setMessage("❗ Please enter a video URL.");
      formData.append("videoUrl", videoUrl);
    }

    try {
      setUploading(true);
      setMessage("");

      const res = await axios.post("https://newsweb-k4pv.onrender.com/api/live-video/upload", formData, {
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
       
        onUploadProgress: (e) => {
          const percent = Math.round((e.loaded * 100) / e.total);
          setProgress(percent);
        },
      });
       console.log(res)

      setMessage("✅ Video uploaded successfully!");
      setVideoFile(null);
      setVideoUrl("");
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("❌ Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white border rounded shadow mt-6">
      <div className="flex items-center gap-2 mb-4">
        <FiUpload className="text-blue-600 text-2xl" />
        <h2 className="text-xl font-semibold text-gray-800">Upload Live Video</h2>
      </div>

      <form onSubmit={handleUpload} className="space-y-4">
        <select
          value={uploadType}
          onChange={(e) => setUploadType(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="file">Upload Video File</option>
          <option value="url">Use Video URL</option>
        </select>

        {uploadType === "file" ? (
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="block w-full text-sm border p-2 rounded"
          />
        ) : (
          <input
            type="text"
            placeholder="Enter video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="block w-full text-sm border p-2 rounded"
          />
        )}

        {progress > 0 && uploadType === "file" && (
          <div className="w-full bg-gray-200 rounded h-4 overflow-hidden">
            <div style={{ width: `${progress}%` }} className="h-full bg-blue-600 transition-all" />
          </div>
        )}

        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          {uploading ? "Uploading..." : "Upload Video"}
        </button>
      </form>

      {message && <div className="mt-4 text-sm text-gray-700">{message}</div>}
    </div>
  );
};

export default AdminVideoUploader;
