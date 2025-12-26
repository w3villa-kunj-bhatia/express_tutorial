const cors = require("cors");
const express = require("express");
const app = express();
const productsRouter = require("./products");

app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
  })
);

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
    })

app.use(express.json());

app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/about", (req, res) => {
  res.send("About Us Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Us Page");
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
  console.log("New contact message:", name, "said", message);
  res.json({ status: "success", message: "Thank you for contacting us!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
