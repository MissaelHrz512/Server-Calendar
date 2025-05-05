const express = require("express");
const app = express();
const morgan = require("morgan");


app.use(express.static("public"));

app.use(morgan("dev"));

require("dotenv").config();

//Lectura y parseo
app.use(express.json());

//Rutas

app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT || 5000, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
