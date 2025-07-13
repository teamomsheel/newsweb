// const { formidable } = require("formidable");
// const cloudinary = require("cloudinary").v2;
// const LiveVideo = require("../Models/liveVideoModel");

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
//   secure: true,
// });

// const uploadLiveVideo = async (req, res) => {
//   const { id, role } = req.userInfo;

//   if (role !== "admin") {
//     return res.status(403).json({ message: "Access denied" });
//   }

//   const form = formidable({ multiples: false, keepExtensions: true });

//   try {
//     form.parse(req, async (err, fields, files) => {
//       if (err) return res.status(500).json({ message: "Form parsing error" });

//       const uploadType = fields.uploadType?.[0];
//       let videoUrl;

//       if (uploadType === "url") {
//         videoUrl = fields.videoUrl?.[0];
//         if (!videoUrl) {
//           return res.status(400).json({ message: "Video URL missing" });
//         }
//       } else {
//         const videoFile = files.video?.[0];
//         if (!videoFile) {
//           return res.status(400).json({ message: "No video file uploaded" });
//         }

//         const result = await cloudinary.uploader.upload(videoFile.filepath, {
//           resource_type: "video",
//           folder: "live_videos",
//         });

//         videoUrl = result.secure_url;
//       }

//       const existing = await LiveVideo.findOne();
//       let videoDoc;

//       if (existing) {
//         videoDoc = await LiveVideo.findByIdAndUpdate(
//           existing._id,
//           { url: videoUrl, updatedBy: id, updatedAt: new Date() },
//           { new: true }
//         );
//       } else {
//         videoDoc = await LiveVideo.create({
//           url: videoUrl,
//           updatedBy: id,
//         });
//       }

//       return res.status(200).json({ message: "Live video uploaded", video: videoDoc });
//     });
//   } catch (error) {
//     console.error("Upload error:", error.message);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// module.exports = {
//   uploadLiveVideo,
//   getLiveVideo,
// };

const { formidable } = require("formidable");
const cloudinary = require("cloudinary").v2;
const LiveVideo = require("../Models/liveVideoModel.js");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const uploadLiveVideo = async (req, res) => {
  const { id, role } = req.userInfo;

  if (role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }

  const form = formidable({ multiples: false, keepExtensions: true });

  try {
    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(500).json({ message: "Form parsing error" });

      const uploadType = fields.uploadType?.[0];
      let videoUrl;

      if (uploadType === "url") {
        videoUrl = fields.videoUrl?.[0];
        if (!videoUrl) {
          return res.status(400).json({ message: "Video URL missing" });
        }
      } else {
        const videoFile = files.video?.[0];
        if (!videoFile) {
          return res.status(400).json({ message: "No video file uploaded" });
        }

        const result = await cloudinary.uploader.upload(videoFile.filepath, {
          resource_type: "video",
          folder: "live_videos",
        });

        videoUrl = result.secure_url;
      }

      const existing = await LiveVideo.findOne();
      let videoDoc;

      if (existing) {
        videoDoc = await LiveVideo.findByIdAndUpdate(
          existing._id,
          { url: videoUrl, updatedBy: id, updatedAt: new Date() },
          { new: true }
        );
      } else {
        videoDoc = await LiveVideo.create({
          url: videoUrl,
          updatedBy: id,
        });
      }

      return res.status(200).json({ message: "Live video uploaded", video: videoDoc });
    });
  } catch (error) {
    console.error("Upload error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Add this missing function
const getLiveVideo = async (req, res) => {
  try {
    const video = await LiveVideo.findOne().sort({ updatedAt: -1 });
    if (!video) {
      return res.status(404).json({ message: "No live video found" });
    }
    return res.status(200).json({ video });
  } catch (error) {
    console.error("Fetch error:", error.message);
    return res.status(500).json({ message: "Error fetching live video" });
  }
};

module.exports = {
  uploadLiveVideo,
  getLiveVideo, // 🟢 Now this exists
};
