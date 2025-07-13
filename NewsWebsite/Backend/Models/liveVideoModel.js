const mongoose = require("mongoose");

const liveVideoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("LiveVideo", liveVideoSchema);
