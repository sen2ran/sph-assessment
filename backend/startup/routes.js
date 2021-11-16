const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const error = require("../middleware/error");

const search = require("../route/search");

module.exports = function (app) {
  app.use(cors());
  app.use(morgan("common"));
  app.use(express.json());
  //Routes
  app.use("/api/search", search);
  //Error Handling
  app.use(error);
};
