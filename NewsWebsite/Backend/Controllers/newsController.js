const { formidable } = require("formidable");
const cloudinary = require("cloudinary").v2;
const newsModel = require("../Models/newsModel.js");
const authModel = require("../Models/authModel.js");
const User = require("../Models/User.js");
const galleryModel = require("../Models/galleryModel.js");
const {
  mongo: { ObjectId },
} = require("mongoose");
const moment = require("moment");

const add_news = async (req, res) => {
  const { id, category, name } = req.userInfo;
  const form = formidable({});
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  try {
    const [fields, files] = await form.parse(req);
    // console.log("FILES:", files);

    const { url } = await cloudinary.uploader.upload(files.image[0].filepath, {
      folder: "news_images",
    });
    const { title, description } = fields;
    const news = await newsModel.create({
      writerId: id,
      title: title[0].trim(),
      slug: title[0].trim().split(" ").join("-"),
      category,
      description: description[0],
      date: moment().format("LL"),
      writerName: name,
      image: url,
    });
    return res.status(201).json({ message: "news send successfully", news });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal server error at news add " });
  }
};

const update_news = async (req, res) => {
  const { news_id } = req.params;
  // const {id,category,name}=req.userInfo
  const form = formidable({});
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  try {
    const [fields, files] = await form.parse(req);
    const { title, description } = fields;
    let url = fields.old_image[0];

    if (Object.keys(files).length > 0) {
      const splitImages = url.split("/");
      const imagesFile = splitImages[splitImages.length - 1].split(".")[0];
      await cloudinary.uploader.destroy(imagesFile);
      const data = await cloudinary.uploader.upload(
        files.new_image[0].filepath,
        {
          folder: "news_images",
        }
      );
      url = data.url;
    }
    const news = await newsModel.findByIdAndUpdate(
      news_id,
      {
        title: title[0].trim(),
        slug: title[0].trim().split(" ").join("-"),
        description: description[0],
        image: url,
      },
      { new: true }
    );
    return res.status(201).json({ message: "news updated successfully", news });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ message: "internal server error at updating news" });
  }
};

const update_news_status = async (req, res) => {
  const { role } = req.userInfo;
  const { news_id } = req.params;
  const { status } = req.body;
  if (role === "admin") {
    const news = await newsModel.findByIdAndUpdate(
      news_id,
      { status },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "news status updated successfully", news });
  } else {
    return res
      .status(401)
      .json({ message: "you dont have access to update status" });
  }
};

const get_images = async (req, res) => {
  const { id } = req.userInfo;

  try {
    const images = await galleryModel
      .find({
        writerId: new ObjectId(id),
      })
      .sort({
        createdAt: -1,
      });
    return res.status(201).json({ images });
  } catch (error) {
    return res.status(500).json({ message: "internal error at images get" });
  }
};

const add_images = async (req, res) => {
  const form = formidable({});
  const { id } = req.userInfo;

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
  try {
    const [_, files] = await form.parse(req);
    let allImages = [];

    const { images } = files;
    for (let i = 0; i < images.length; i++) {
      const { url } = await cloudinary.uploader.upload(images[i].filepath, {
        folder: "news_images",
      });
      allImages.push({ writerId: id, url });
    }
    const image = await galleryModel.insertMany(allImages);
    return res
      .status(201)
      .json({ images: image, message: "images added successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "internal server error at add images" });
  }
};

const get_dashboard_news = async (req, res) => {
  const { id, role } = req.userInfo;
  try {
    if (role === "admin") {
      const news = await newsModel.find({}).sort({ createdAt: -1 });
      return res.status(200).json({ news });
    } else {
      const news = await newsModel
        .find({ writerId: new ObjectId(id) })
        .sort({ createdAt: -1 });
      return res.status(200).json({ news });
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ message: "internal server error at get_dashboard_news " });
  }
};

const get_dashboard_Uni_news = async (req, res) => {
  const { news_id } = req.params;
  try {
    const news = await newsModel.findById(news_id);
    return res.status(200).json({ news });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "internal server error at get dashboard uni news" });
  }
};

//website

const getAllNews = async (req, res) => {
  try {
    const category_news = await newsModel.aggregate([
      {
        $match: {
          status: "active",
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $group: {
          _id: "$category",
          news: {
            $push: {
              _id: "$_id",
              title: "$title",
              slug: "$slug",
              writerName: "$writerName",
              image: "$image",
              description: "$description",
              date: "$date",
              category: "$category",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          news: { $slice: ["$news", 5] },
        },
      },
    ]);

    const news = {};

    for (let i = 0; i < category_news.length; i++) {
      news[category_news[i].category] = category_news[i].news;
    }
    // console.log(news)
    //    console.log(category_news)
    return res.status(201).json({ news });
  } catch (error) {
    console.error("Error in getAllNews:", error.message);
    return res
      .status(500)
      .json({ message: "internal server error at getallnews" });
  }
};

const getNewsBySlug=async(req,res)=>{
  const {slug} = req.params
  try {
    const news=await newsModel.findOneAndUpdate({slug},{
      $inc:{count : 1}
    },{new : true})

    const relatedNews=await newsModel.find({
      $and:[
        {
          slug:{
            $ne:slug
          }

        },{
          category:{
            $eq:news.category
          }

        }
      ]
    }).limit(4).sort({createdAt:-1})


    return res.status(201).json({news: news ? news : {},relatedNews})
    
  } catch (error) {
    // console.log(error.message)
    return res.status(500).json({message:"internal server error at getnewsByslug"})
  }
}

const get_categories=async(req,res)=>{
  try {
    const categories=await newsModel.aggregate([
      {
        $group:{
          _id:"$category",
          count:{$sum :1}
        }
      },
      {
        $project:{
          _id:0,
          category: "$_id",
          count:1

        }
      }
    ])
   
    return res.status(201).json({categories})
  } catch (error) {
    console.log(error)
    return res.status(500).json({message:"internal server error at getting all category"})
    
  }

}

const getNewsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const news = await newsModel.find({
      category: { $regex: new RegExp(`^${category}$`, "i") },
      status: "active"
    }).sort({ createdAt: -1 });

    return res.status(200).json({ news });
  } catch (error) {
    console.error("Error fetching news by category:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};




const getPopularNews=async(req,res)=>{
  try {
    const popularNews=await newsModel.find({status:"active"}).sort({count:-1}).limit(4)
   
    
    return res.status(201).json({popularNews})
    
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message:"internal server error at getPopularnews"})
  }
}

const getLatestNews=async(req,res)=>{
  try {
    const news=await newsModel.find({status:"active"}).sort({createdAt:-1}).limit(8)
    // console.log(news)
    return res.status(201).json({news})
    
  } catch (error) {
   
    return res.status(500).json({message:"internal error at getlatestnews"})
  }
}

const getRecentNews=async(req,res)=>{
  try {
    const news=await newsModel.find({status:"active"}).sort({createdAt:-1}).skip(6).limit(6)
    return res.status(201).json({news})
  } catch (error) {
    // console.log(error.message)
    return res.status(500).json({message:"internal server error at getrecentnews"})
  }
}

const getNewsBySearch=async(req,res)=>{
      const {title}=req.query
  try {
     const news=await newsModel.find({
      title:{
        $regex: title,
        $options: "i"
      },
      status:"active"
     })
     return res.status(201).json({news})
  } catch (error) {
    return res.status(500).json({message:"internal server error"})
  }
}

module.exports = {
  add_news,
  get_images,
  add_images,
  get_dashboard_news,
  get_dashboard_Uni_news,
  update_news,
  update_news_status,
  getAllNews,
  get_categories,
  getNewsByCategory,
  getNewsBySlug,
  getPopularNews,
  getLatestNews,
  getRecentNews,
  getNewsBySearch
};
