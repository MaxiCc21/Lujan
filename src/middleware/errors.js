const { errorLogger, logger } = require("../config/logger");

const errorMiddleware = (error, req, res, next) => {
  let errorObject;
  if (error.toJson) {
    errorObject = error.toJson();
    errorLogger.error(errorObject);
  } else {
    errorLogger.error(error);
    errorObject = {
      status: 500,
      name: "Error desconocido",
      message: "Error desconocido",
    };
  }

  res.status(errorObject.status).json(errorObject);
};

module.exports = errorMiddleware;
