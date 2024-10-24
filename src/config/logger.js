const { createLogger, transports, format } = require("winston");

const { server } = require("./objectConfig");

const levels = {
  error: "red",
  warn: "yellow",
  info: "green",
  verbose: "blue",
  debug: "cyan",
};

const logger = createLogger({
  levels: levels,
  format: format.combine(
    format.colorize({ all: true }),
    format.printf(({ level, message }) => {
      return `${level}: ${message} (${new Date().toLocaleString()})`;
    })
  ),
});

if (server.NODE_ENV === "development") {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.colorize({ all: true }),
        format.printf(({ level, message }) => {
          return `${level}: ${message} (${new Date().toLocaleString()})`;
        })
      ),
    })
  );
}

const errorLogger = createLogger({
  level: "error",
  transports: [
    new transports.Console(),
    new transports.File({ filename: "error.log" }),
  ],
  format: format.combine(
    format.colorize({ all: true }),
    format.printf(({ level, message, status, stack }) => {
      const redColor = "\x1b[31m";
      const resetColor = "\x1b[0m";

      const statusText = status ? `${redColor} ${status}${resetColor}` : "";
      const stackText = stack ? `\n${redColor} ${stack}${resetColor}` : "";

      return `${level}${statusText}: ${redColor}${message}${resetColor} (${new Date().toLocaleString()})${stackText}`;
    })
  ),
});

const typeLogger = {
  logger,
  errorLogger,
};

module.exports = typeLogger;
