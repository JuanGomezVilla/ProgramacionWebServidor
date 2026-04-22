//Import the Product class
const { validationResult } = require("express-validator");
const Product = require("../models/ProductModel");



//Method to create product
exports.createProduct = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch(error){
        res.status(500).json({ message: "Error creating product", error});
    }
};



//Method to get products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.getAll();
        res.json(products);
    } catch(error){
        res.status(500).json({ message: "Error retrieving products", error});
    }
};



//Method to get a product by its ID
exports.getProductById = (req, res) => {
    //Get the product from the parameters
    const product = Product.searchById(parseInt(req.params.id));
    
    //Return an error or the product JSON
    if(!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
};



//Method to delete product
exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.delete(parseInt(req.params.id));
        if(!deleted) return res.status(404).json({ message: "Product not found" });
        res.json({ message: "Product deleted successfully" });
    } catch(error){
        res.status(500).json({ message: "Error deleting product", error });
    }
};



//Method to delete product
exports.modifyProduct = async (req, res) => {
    try {
        const modified = await Product.modify(parseInt(req.params.id), req.params.name);
        if(!modified) return res.status(404).json({ message: "Product not found" });
        res.json({ message: "Product updated successfully" });
    } catch(error){
        res.status(500).json({ message: "Error updating product", error });
    }
};