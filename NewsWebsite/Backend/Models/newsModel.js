// const mongoose = require("mongoose");

// const newsSchema = new mongoose.Schema(
//   {
//     writerId: {
//       type: Schema.Types.ObjectId,
//       required: true,
//       ref: "authors",
//     },
//     writerName: {
//       type: String,
//       required: true,
//     },
//     title: {
//       type: String,
//       required: true,
//     },
//     slug: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       default: "",
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       default: "",
//     },
//     date:{
//         type:String,
//         required:true,
//     },
//     status:{
//         type:String,
//         default:"pending"
//     },
//     count:{
//         type: Number,
//         default:0

//     }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("news", newsSchema);

const { Schema, model } = require("mongoose");

const newsSchema = new Schema(
  {
    writerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "authors",
    },
    writerName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = model("news", newsSchema);
