const express = require("express");
const dotenv = require("dotenv");

const { connectDB } = require("./config/database");
const app = express();
const port = 3000;

dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
