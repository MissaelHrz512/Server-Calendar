/**
 * Rutas de Usuarios
 * host + /api/auth
 */

const express = require("express");
const router = express.Router();
const {
  nameValidator,
  emailValidator,
  passwordValidator,
} = require("../middlewares/validators");
const { validateFields } = require("../middlewares/validateFields");
const { createUser, login, renewToken } = require("../controllers/auth");

router.post(
  "/new",
  [nameValidator, emailValidator, passwordValidator, validateFields],
  createUser
);

router.post("/", [emailValidator, passwordValidator, validateFields], login);

router.get("/renew", renewToken);

module.exports = router;
