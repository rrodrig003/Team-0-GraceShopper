const router = require("express").Router();

const productRoutes = require("./product.js");

router.use("/api/product", productRoutes);

module.exports = router;
