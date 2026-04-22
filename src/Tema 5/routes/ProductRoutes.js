//Importing elements
const express               = require("express");
const router                = express.Router();
const { validateProduct }   = require("../middlewares/ValidationProduct");
const productController     = require("../controllers/ProductController");

//Endpoint definition
router.post("/",    validateProduct, productController.createProduct);
router.get("/",     productController.getProducts);
router.get("/:id",  productController.getProductById);

module.exports = router;