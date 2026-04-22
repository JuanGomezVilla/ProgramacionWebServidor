class Product {
    //Constructor
    constructor(id, name, category, price){
        this.id         = id;
        this.name       = name;
        this.category   = category;
        this.price      = price;
    }

    static getAll(){
        //Simulating database access
        return Product.products;
    }

    static searchById(id){
        //Search for a specific product by ID
        return Product.products.find(product => product.id === id);
    }
}

//Create three random products
Product.products = [
    new Product(1, 'Tomato',    'Vegetable',    1.2),
    new Product(2, 'Apple',     'Fruit',        0.9),
    new Product(3, 'Lettuce',   'Vegetable',    0.8)
];

module.exports = Product;