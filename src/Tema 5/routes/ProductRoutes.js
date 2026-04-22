//Importing elements
const express               = require("express");
const router                = express.Router();
const { validateProduct }   = require("../middlewares/ValidationProduct");
const productController     = require("../controllers/ProductController");
const autenticateToken      = require("../middlewares/AutenticateToken");
const authorizeRole         = require("../middlewares/AuthorizeRole");
const allowedRoles          = require("../middlewares/AllowedRoles");

//Endpoint definition
router.put("/:id",      autenticateToken, allowedRoles(["admin", "editor"]), productController.modifyProduct);
router.delete("/:id",   autenticateToken, authorizeRole("admin"), productController.deleteProduct);
router.post("/",        validateProduct, productController.createProduct);
router.get("/",         productController.getProducts);
router.get("/:id",      productController.getProductById);

module.exports = router;