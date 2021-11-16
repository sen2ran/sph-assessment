const express = require("express");
const winston = require("winston");

const { port } = require("./config");


const app = express();
require("./startup/logging")();
require("./startup/routes")(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  winston.info(`Listening on port ${port}`);
});
