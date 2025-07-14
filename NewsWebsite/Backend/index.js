const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const connectDb = require("./Utils/db.js");
const authRoutes = require("./Routes/authRoutes.js");
const newsRoutes=require("./Routes/newsRoutes.js")
const magazineRoutes=require('./Routes/magazineRoute.js')
require("dotenv").config();
const app = express();
app.use(express.json());


// app.use(cors({
//   origin: ["https://newsweb-1-45eo.onrender.com","http://localhost:3000"],
//   credentials: true,
// }));

app.use(cors({
  origin: ['https://newsweb-qapb.vercel.app', 'https://newsweb.vercel.app'], // add both preview and production URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


// app.use(cors({
//   origin: [process.env.CLIENT_URL,"http://localhost:3000"],
//   credentials: true,
// }));
app.use(cookieParser());
app.use(bodyParser.json());


connectDb();


app.use("/api", authRoutes);
app.use("/api",newsRoutes)
// app.use('/api',livevideoUpdate)
app.use("/api", magazineRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


