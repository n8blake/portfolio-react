const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const portfolioItemSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: true },
    badges: { type: Array },
    screenShots: { type: Array },
    tags: { type: Array }
});

const PortfolioItem = Model("PortfolioItem", portfolioItemSchema);

module.exports = PortfolioItem;