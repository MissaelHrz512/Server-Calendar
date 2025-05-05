//HEADER x-token

const { validateToken } = require("../helpers/JWT_methods");

const validateJWT = async (req, res, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({ ok: false, msg: "no token" });
  }
  try {
    const { uid, name } = await validateToken(token);
    req.user = { uid, name };
  } catch (error) {
    return res.status(401).json({ ok: false, msg: "Invalid Token" });
  }

  next();
};

module.exports = validateJWT;
