//Import modules
const express       = require("express");
const app           = express();
const productRoutes = require("./routes/ProductRoutes");

//Create the server
app.use(express.json());
app.use("/products", productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});