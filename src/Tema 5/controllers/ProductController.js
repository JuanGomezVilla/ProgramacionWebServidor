//Import the Product class
const Product = require("../models/ProductModel");

//Method to get products
exports.getProducts = (req, res) => {
    const products = Product.getAll();
    res.json(products);
};

//Method to get a product by its ID
exports.getProductById = (req, res) => {
    //Get the product from the parameters
    const product = Product.searchById(parseInt(req.params.id));
    
    //Return an error or the product JSON
    if(!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
};