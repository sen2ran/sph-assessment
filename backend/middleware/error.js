const winston = require("winston");

module.exports = function (err, req, res, next) {
  winston.error(err.message, err);
  console.log(err);
  res.status(500).send({
    success: false,
    status: "Internal Server Error",
    details: "Server error. Please try again in a bit.",
  });
};
// Every Backend Unhandeled Error Message Go By this
