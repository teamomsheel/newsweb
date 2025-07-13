const mongoose=require("mongoose")

require("dotenv").config()

const connectDb=async()=>{
    try{
        const DB_URL=process.env.db_Url
        const conn=await mongoose.connect(DB_URL)
        console.log("database connected successfully")

    }catch{
        console.log("database connection error")
    }
}

module.exports=connectDb


