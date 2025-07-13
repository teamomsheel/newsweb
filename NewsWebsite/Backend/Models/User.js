const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    role: { type: String, required: true },
    image: { type: String, default: "" },
    category: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("authors", authSchema);
