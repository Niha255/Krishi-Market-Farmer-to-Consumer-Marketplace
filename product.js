const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    farmer: String
});

module.exports = mongoose.model("Product", productSchema);