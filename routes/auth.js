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
const validateJWT = require("../middlewares/validateJWT");

router.post(
  "/new",
  [nameValidator, emailValidator, passwordValidator, validateFields],
  createUser
);

router.post("/", [emailValidator, passwordValidator, validateFields], login);

router.get("/renew", validateJWT , renewToken);

module.exports = router;
