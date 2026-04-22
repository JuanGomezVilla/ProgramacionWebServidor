//Importing elements
const express           = require("express");
const router            = express.Router();
const productController = require("../controllers/ProductController");

//Endpoint definition
router.get("/",     productController.getProducts);
router.get("/:id",  productController.getProductById);

module.exports = router;