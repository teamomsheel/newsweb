// const mongoose=require("mongoose")

// const gallerySchema=new Schema({
//      writerId: {
//       type: Schema.Types.ObjectId,
//       required: true,
//       ref: "authors",
//     },
//     url:{
//         type:String,
//         required:true
//     }
// },{timestamps:true})


// module.exports=mongoose.model("images",gallerySchema)

const mongoose = require("mongoose");
const { Schema } = mongoose;

const gallerySchema = new Schema(
  {
    writerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "authors",
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("images", gallerySchema);
