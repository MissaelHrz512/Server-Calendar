const { check } = require("express-validator");
const isDate = require("../helpers/isDate");

const nameValidator = check("name", "El nombre es obligatorio").not().isEmpty();

const emailValidator = check("email", "El email es obligatorio").isEmail();

const passwordValidator = check(
  "password",
  "La contraseña debe tener al menos 6 caracteres"
).isLength({ min: 6 });

const titleValidator = check("title", "El titulo es obligatorio")
  .not()
  .isEmpty();

const startValiator = check("start", "La fecha de inicio es obligatoria").custom(isDate)

const endValiator = check("end", "La fecha de finalización es obligatoria").custom(isDate)

module.exports = {
  nameValidator,
  emailValidator,
  passwordValidator,
  titleValidator,
  startValiator,
  endValiator,
};
