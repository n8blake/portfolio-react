const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const imageStoreRoutes = require("./images");

// API Routes
router.use("/api", apiRoutes);

// IMAGE STORE Routes
router.use("/images", imageStoreRoutes);

// If no API or IMAGE STORE routes are hit, send the React app
router.use(function(req, res) {
if (process.env.NODE_ENV === "production") {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
} else {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
}
});

module.exports = router;