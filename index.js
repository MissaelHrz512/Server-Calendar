const express = require("express");
const app = express();

app.use(express.static("public"));

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
