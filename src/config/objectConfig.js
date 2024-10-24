const dotenv = require("dotenv");
const commander = require("../process/comander");

const { mode } = commander.opts();

dotenv.config({
  path: mode === "production" ? "./.env.production" : "./.env.development",
});

const systemVars = {
  server: {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
  },
  database: {
    protocol: process.env.DATABASE_PROTOCOL,
    URI: process.env.DATABASE_URL,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
};

module.exports = systemVars;
