// const express = require("express");
// const authController = require("../Controllers/authController.js");
// const authMiddleware=require("../Middlewares/authMiddleware.js")

// const router = express.Router();

// router.post("/login", authController.login);
// router.get("/login", authController.checkLogin);
// router.post("/logout", authController.logout);
// // router.post("/news/writer/add",authMiddleware.auth,authMiddleware.role,authController.add_writer)
// router.get("/news/writers",authMiddleware.auth,authMiddleware.role,authController.get_writers)

// module.exports = router;

const express = require("express");
const authController = require("../Controllers/authController.js");
const authMiddleware = require("../Middlewares/authMiddleware.js");

const router = express.Router();

router.post("/login", authController.login);
router.get("/login", authController.checkLogin);
router.post("/logout", authController.logout);

router.post("/news/writer/add", authMiddleware.auth, authMiddleware.role, authController.add_writer);
router.get("/news/writers", authMiddleware.auth, authMiddleware.role, authController.get_writers);

module.exports = router;
