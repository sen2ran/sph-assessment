const winston = require("winston");
require("express-async-errors");

/**
 * Will log in errorlog folder , for degubuggin purpose
 */
module.exports = function () {
  winston.exceptions.handle(
    new winston.transports.File({
      filename: "errorlog/uncaughtExceptions.json",
    })
  );
  process.on("unhandledRejection", (ex) => {
    throw ex;
  });
  winston.add(
    new winston.transports.File({
      filename: "errorlog/logfile.log",
    })
  );
};
