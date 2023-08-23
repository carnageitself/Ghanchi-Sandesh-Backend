const express = require("express");
const errorMiddleware = require("./middleware/error.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
// Set up middleware
app.use(errorMiddleware);
module.exports = app;
