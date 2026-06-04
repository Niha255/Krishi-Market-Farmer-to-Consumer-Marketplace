const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// GET products
router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// ADD product
router.post("/", async (req, res) => {
    const { name, price, farmer } = req.body;

    const product = new Product({ name, price, farmer });
    await product.save();

    res.json(product);
});

module.exports = router;