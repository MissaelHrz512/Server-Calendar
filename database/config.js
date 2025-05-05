const mongoose = require("mongoose");

require("dotenv").config();

const dbConn = async () => {
  try {
    await mongoose.connect(`${process.env.URI}/${process.env.DB_Name}`);
    console.log("Mongo Online");
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error al iniciar");
  }
};

module.exports = dbConn