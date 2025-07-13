const { formidable } = require("formidable");
const cloudinary = require("cloudinary").v2;
const moment = require("moment");
const axios = require("axios");
const magazineModel = require("../Models/magazineModel.js");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const addMagazine = async (req, res) => {
  const form = formidable({
    multiples: false,
    keepExtensions: true,
  });

  try {
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    const { title, description, type, url } = fields;
    let fileUrl = url?.[0] || "";

    if (!title || !type) {
      return res.status(400).json({ message: "Title and type are required" });
    }

    if (type[0] === "file" && files?.file) {
      const upload = await cloudinary.uploader.upload(files.file[0].filepath, {
        folder: "magazines",
        resource_type: "raw",
        access_mode: "public",
      });
      fileUrl = upload.secure_url;
    }

    const magazine = await magazineModel.create({
      title: title[0],
      description: description?.[0] || "",
      type: type[0],
      fileUrl,
      uploadedBy: req.userInfo?.id || null,
      date: moment().format("LL"),
    });

    res.status(201).json({ message: "Magazine uploaded", magazine });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: "Internal server error at addMagazine" });
  }
};

const getAllMagazines = async (req, res) => {
  try {
    const magazines = await magazineModel.find().sort({ createdAt: -1 });
    res.status(200).json({ magazines });
  } catch (err) {
    res.status(500).json({ message: "Error fetching magazines" });
  }
};

const downloadMagazine = async (req, res) => {
  try {
    console.log("Download requested for ID:", req.params.id);
    const magazine = await magazineModel.findById(req.params.id);
    if (!magazine) return res.status(404).json({ message: "Magazine not found" });

    if (!magazine.fileUrl) {
      return res.status(400).json({ message: "No file URL found for this magazine" });
    }

    // Log file URL
    console.log("File URL:", magazine.fileUrl);

    // Fetch the file stream from Cloudinary
    const response = await axios.get(magazine.fileUrl, { responseType: "stream" });

    res.setHeader("Content-Disposition", `attachment; filename="${magazine.title}.pdf"`);
    res.setHeader("Content-Type", "application/pdf");

    response.data.pipe(res);
  } catch (error) {
    console.error("Download error:", error);
    if (error.response) {
      console.error("Axios response error data:", error.response.data);
    }
    res.status(500).json({ message: "Failed to download file", error: error.message });
  }
};


module.exports = { addMagazine, getAllMagazines, downloadMagazine };
