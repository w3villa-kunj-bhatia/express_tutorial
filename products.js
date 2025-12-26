const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 1299 },
    { id: 2, name: "Mouse", price: 899 },
    { id: 3, name: "Phone", price: 499 },
  ]);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const products = [
    { id: 1, name: "Laptop", price: 1299 },
    { id: 2, name: "Mouse", price: 899 },
    { id: 3, name: "Phone", price: 499 },
  ];

  const requestedProduct = products.find((product) => product.id === id);
  res.json(requestedProduct);
});

router.post("/", (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    name,
    price,
  };
  console.log(newProduct);
  res.json({ message: "Product created successfully", product: newProduct });
});

module.exports = router;
