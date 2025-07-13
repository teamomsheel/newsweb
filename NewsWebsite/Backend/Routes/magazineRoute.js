const express = require("express");
const { addMagazine, getAllMagazines, downloadMagazine } = require("../Controllers/magazineController.js");
const { auth } = require("../Middlewares/authMiddleware.js");

const router = express.Router();

router.post("/magazine/add", auth, addMagazine);
router.get("/magazine/all", getAllMagazines);
router.get("/magazine/download/:id", downloadMagazine);

module.exports = router;
