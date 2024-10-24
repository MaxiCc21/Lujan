const express = require("express");

const { server } = require("./config/objectConfig");
const { logger } = require("./config/logger");
const configureHandlebars = require("./config/handlebars");
const isAdminMiddleware = require("./middleware/isAdmin");
const errorMiddleware = require("./middleware/errors");
const {
  handleSIGINT,
  handleUncaughtException,
  handleUnhandledRejection,
} = require("./handlers/eventHandlers");

process.on("unhandledRejection", handleUnhandledRejection);
process.on("uncaughtException", handleUncaughtException);
process.on("SIGINT", handleSIGINT);

const app = express();

//--------------- Handlebars ---------------
configureHandlebars(app);
//--------------- Handlebars ---------------

app.use("/static", express.static(__dirname + "/public"));

app.get("/Home", async (req, res) => {
  res.render("home");
});

app.use(errorMiddleware);

app.listen(server.PORT, () => {
  logger.info(
    `Servidor en modo ${server.NODE_ENV} escuchando en el puerto ${server.PORT}`
  );
});
