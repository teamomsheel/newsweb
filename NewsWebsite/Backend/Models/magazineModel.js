const mongoose = require("mongoose");

const magazineSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String },
    fileUrl: { type: String, required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: { type: String, enum: ["file", "url"], required: true },
    date: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Magazine", magazineSchema);
