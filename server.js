const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require("./productRoutes");
app.use("/api/products", productRoutes);

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/krishiDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
