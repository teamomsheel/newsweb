const express = require("express");

const authMiddleware=require("../Middlewares/authMiddleware.js")
const newsController=require("../Controllers/newsController.js")
const liveVideoController=require('../Controllers/liveVideoController.js')
const router = express.Router();

router.post("/news/add",authMiddleware.auth,newsController.add_news)
router.put("/news/update/:news_id",authMiddleware.auth,newsController.update_news)
router.put("/news/status_update/:news_id",authMiddleware.auth,newsController.update_news_status)
router.get("/images",authMiddleware.auth,newsController.get_images)
router.post("/images/add",authMiddleware.auth,newsController.add_images)

// admin dashboard

router.get("/news",authMiddleware.auth,newsController.get_dashboard_news)
router.get("/news/:news_id",authMiddleware.auth,newsController.get_dashboard_Uni_news)

// website 

router.get("/all/news",newsController.getAllNews)
router.get("/popular/news",newsController.getPopularNews)
router.get("/latest/news",newsController.getLatestNews)
router.get("/recent/news",newsController.getRecentNews)

router.get("/news/details/:slug", newsController.getNewsBySlug);

router.get("/category/all",newsController.get_categories)

router.get("/category/news/:category",newsController.getNewsByCategory);

// search

router.get("/news/search",newsController.getNewsBySearch)

// liveVideoRoutes
router.post("/live-video/upload", authMiddleware.auth, liveVideoController.uploadLiveVideo);

// Publicly accessible video fetch
router.get("/live-video", liveVideoController.getLiveVideo);

module.exports = router;
