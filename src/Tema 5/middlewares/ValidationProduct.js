const { body } = require("express-validator");
const Product = require("../models/ProductModel");

const bannedWords = ["free", "illegal", "not suitable"];
const doesNotContainBannedWords = (value) => {
    const contains = bannedWords.some(word => value.toLowerCase().includes(word));
    if(contains) throw new Error("The name contains forbidden terms");
    return true;
};

const isNameUnique = async (value) => {
    const existing = await Product.findOne({ name: value });
    if (existing) throw new Error("A product with that name already exists");
};

//Export product validation rules
exports.validateProduct = [
    body("name")
        .notEmpty().withMessage("The name is required")
        .isLength({ min: 3 }).withMessage("The name must have at least 3 characters")
        .isAlphanumeric("es-ES", { ignore: " " }).withMessage("The name can only contain letters and numbers")
        .custom(doesNotContainBannedWords)
        .custom(isNameUnique),

    body("category")
        .optional()
        .isAlpha("es-ES", { ignore: " " }).withMessage("The category must contain only letters"),
    
    body("price")
        .notEmpty().withMessage("The price is required")
        .isFloat({ gt: 0 }).withMessage("The price must be a number greater than 0")
];