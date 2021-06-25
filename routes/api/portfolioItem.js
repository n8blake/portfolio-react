const router = require("express").Router();
const portfolioItemController = require("../../controllers/portfolioItemController");

// Match with '/api/portfolio'
router.route("/")
    .get(portfolioItemController.findAll)
    .post(portfolioItemController.create);

// Matches with '/api/portfolio/:id'
router.route("/:id")
    .get(portfolioItemController.findById)
    .put(portfolioItemController.update)
    .delete(portfolioItemController.remove)

module.exports = router;