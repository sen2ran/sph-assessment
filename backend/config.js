const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();

let instance = axios.create({
  baseURL: process.env.HOST_ADDRESS,
  auth: {
    user: process.env.USER,
    password: process.env.PASSWORD,
  },
});

module.exports = {
  port: process.env.PORT,
  instance: instance
};
