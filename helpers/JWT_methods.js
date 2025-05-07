const jwt = require("jsonwebtoken");

const generateJWT = async (uid, name) => {
  try {
    return await jwt.sign({ uid, name }, process.env.JWT_SECRET, {
      expiresIn: "50d",
    });
  } catch (error) {
    console.log(error);
    throw new Error("Call Admin!");
  }
};

const validateToken = async (token) => {
  try {
    return await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log(error);
    throw new Error("Call Admin!");
  }
};

module.exports = { generateJWT, validateToken };
