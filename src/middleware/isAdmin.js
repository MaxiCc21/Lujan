const AutError = require("../errors/authError");

module.exports = (req, res, next) => {
  if (req.headers["authorization"] !== "123") {
    next(new AutError());
  } else {
    next();
  }
};
