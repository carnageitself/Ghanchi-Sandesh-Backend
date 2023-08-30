const express = require("express");
const errorMiddleware = require("./middleware/error.js");
const userRoutes = require("./routes/UserRoutes.js");
const cookieparser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieparser());

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
// Set up middleware
app.use("/api/v1", userRoutes);
app.use(errorMiddleware);
module.exports = app;
