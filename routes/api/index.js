const router = require("express").Router();
const portfolioItemRoutes = require("./portfolioItem");

// Portfolio Item routes
router.use("/portfolio", portfolioItemRoutes);

module.exports = router;