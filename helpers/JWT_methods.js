const jwt = require("jsonwebtoken");

const generateJWT = async (uid, name) => {
  try {
    return await jwt.sign({ uid, name }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
  } catch (error) {
    console.log(error)
    throw new Error("Call Admin!");
  }
};

module.exports = { generateJWT };
