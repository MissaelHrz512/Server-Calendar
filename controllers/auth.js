const { validationResult } = require("express-validator");

const createUser = (req, res) => {
  const { name, email, password } = req.body;

  res
    .status(201)
    .json({ ok: true, msg: "Register", user: { name, email, password } });
};

const login = (req, res) => {
  const { email, password } = req.body;
  res.json({ ok: true, msg: "Login", user: { email, password } });
};

const renewToken = (req, res) => {
  res.json({ ok: true, msg: "renew" });
};

module.exports = {
  createUser,
  login,
  renewToken,
};
