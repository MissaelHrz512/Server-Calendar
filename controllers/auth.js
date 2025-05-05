const { hashPass, comparePasswords } = require("../helpers/bycript_methods");
const { generateJWT } = require("../helpers/JWT_methods");
const Usuario = require("../models/User");

const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let checkUser = await Usuario.findOne({ email });
    if (checkUser) {
      return res.status(400).json({ ok: false, msg: "Email NOT avalible!" });
    }
    const user = new Usuario(req.body);
    user.password = hashPass(password);
    await user.save();
    res.status(201).json({ ok: true, uid: user._id });
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Call Admin!" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let checkUser = await Usuario.findOne({ email });
    if (!checkUser) {
      return res.status(400).json({ ok: false, msg: "User not exists" });
    }
    if (!comparePasswords(checkUser.password, password)) {
      return res.status(400).json({ ok: false, msg: "Password invalid" });
    }

    const token = await generateJWT(checkUser.id,checkUser.name)

    res.status(200).json({ ok: true, msg: token });
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Call Admin!" });
  }
};

const renewToken = (req, res) => {
  res.json({ ok: true, msg: "renew" });
};

module.exports = {
  createUser,
  login,
  renewToken,
};
