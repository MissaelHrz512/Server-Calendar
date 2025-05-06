const express = require("express");
const app = express();
const morgan = require("morgan");
const conn = require("./database/config")
const cors = require("cors")
app.use(cors())

app.use(express.static("public"));

conn()

app.use(morgan("dev"));

require("dotenv").config();

//Lectura y parseo
app.use(express.json());

//Rutas

app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

app.listen(process.env.PORT || 5000, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
