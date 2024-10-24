// eventHandlers.js
const { errorLogger, logger } = require("../config/logger");

class eventHandler {
  handleUnhandledRejection(reason, promise) {
    errorLogger.error("Unhandled Rejection:", reason);
  }
  handleUncaughtException(error) {
    errorLogger.error("Excepción no capturada:", error);
  }
  handleSIGINT() {
    logger.info("***Mañana sera otro día :) ***");
    process.exit(0);
  }
}

module.exports = new eventHandler();
