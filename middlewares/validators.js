
const { check } = require("express-validator");

const nameValidator = check("name", "El nombre es obligatorio").not().isEmpty();

const emailValidator = check("email", "El email es obligatorio").isEmail();

const passwordValidator = check("password", "La contraseña debe tener al menos 6 caracteres").isLength({ min: 6 });

module.exports = {
  nameValidator,
  emailValidator,
  passwordValidator,
};