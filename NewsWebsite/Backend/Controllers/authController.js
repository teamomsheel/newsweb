
// const User = require("../Models/User.js");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: "Please provide email and password" });
//   }

//   try {
//     const user = await User.findOne({ email }).select("+password");
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     const payload = {
//       id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       category: user.category,
//     };

//     const token = jwt.sign(payload, process.env.JWT_SECRET, {
//       expiresIn: process.env.EXPIRE_TIME || "1d",
//     });

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: false,
//       sameSite: "Lax",
//       maxAge: 24 * 60 * 60 * 1000,
//     });

//     return res.status(200).json({ message: "Login successful", token });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// const checkLogin = (req, res) => {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(401).json({ message: "Not logged in" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     return res.status(200).json({ user: decoded });
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };

// const logout = (req, res) => {
//   res.clearCookie("token");
//   return res.status(200).json({ message: "Logged out successfully" });
// };

// module.exports = {
//   login,
//   checkLogin,
//   logout,
// };

const User = require("../Models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Please provide email and password" });

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      category: user.category
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRE_TIME || "1d"
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
      maxAge: 24 * 60 * 60 * 1000
    });

    return res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

const checkLogin = (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Not logged in" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ user: decoded });
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logged out successfully" });
};

const add_writer = async (req, res) => {
  const { name, email, password, category } = req.body;

  if (!name || !email || !password || !category)
    return res.status(400).json({ message: "Please provide valid details" });

  if (!email.match(/^([\w-]+(\.[\w-]+)*)@([\w-]+\.)+[a-zA-Z]{2,7}$/))
    return res.status(400).json({ message: "Please provide a valid email" });

  try {
    const writerExists = await User.findOne({ email: email.trim() });
    if (writerExists)
      return res.status(409).json({ message: "Writer already exists" });

    const newWriter = await User.create({
      name: name.trim(),
      email: email.trim(),
      password: await bcrypt.hash(password.trim(), 10),
      category: category.trim(),
      role: "writer"
    });

    return res.status(201).json({ message: "Writer added successfully", writer: newWriter });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const get_writers = async (req, res) => {
  try {
    const writers = await User.find({ role: "writer" }).sort({ createdAt: -1 });
    return res.status(200).json({ writers });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error at getting writers" });
  }
};

module.exports = {
  login,
  checkLogin,
  logout,
  add_writer,
  get_writers
};
