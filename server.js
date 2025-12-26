const cors = require("cors");
const express = require("express");
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/about", (req, res) => {
  res.send("About Us Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Us Page");
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 1299 },
    { id: 2, name: "Mouse", price: 899 },
    { id: 3, name: "Phone", price: 499 },
  ]);
});

app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const products = [
    { id: 1, name: "Laptop", price: 1299 },
    { id: 2, name: "Mouse", price: 899 },
    { id: 3, name: "Phone", price: 499 },
  ];

  const requestedProduct = products.find((product) => product.id === id);
  res.json(requestedProduct);
});

app.get("/message", (req, res) => {
  res.json({ message: "This is a message from the express backend." });
});

app.post("/message", (req, res) => {
  const { name, message } = req.body;
  console.log("New Message: ", name, message);
  res.json({ message: "Thank you for your message" });
});

app.post("/contact", (req, res) => {
  const { name, message } = req.body;
  console.log("New contact message:", name, message);
  res.json({ status: "success", message: "Thank you for contacting us!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
