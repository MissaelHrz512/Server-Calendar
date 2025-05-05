const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync();

const hashPass = (password) => {
  return bcrypt.hashSync(password, salt);
};

const comparePasswords = (db_pass, inputUser) => {
  return bcrypt.compareSync(inputUser,db_pass );
};

module.exports = {
  hashPass,
  comparePasswords,
};
