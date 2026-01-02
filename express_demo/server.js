const express = require("express");
const cors = require("cors");
const app = express();

const productsRouter = require("./product");

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());

// route
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/message", (req, res) => {
  res.json({ message: "Hello from express" });
});

// there are other methods.

app.listen(3001, () => {
  console.log("The server is running");
});
