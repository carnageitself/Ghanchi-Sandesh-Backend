const dotenv = require("dotenv");
const connectDb = require("./config/db.js");
const uncaughtExceptionHandler = require("./middleware/uncaughtExceptionHandler.js");
const unhandledRejectionHandler = require("./middleware/unhandledRejectionHandler.js");
const port = process.env.PORT || 3000;
const app = require("./app.js");
const server = app.listen(port, () => {
  console.log('server has started...');
})

process.on("uncaughtException", (error) => {
  uncaughtExceptionHandler(error, server);
});


if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "config/.env" });
}

connectDb();

// const server = app.listen(port, () => {
//   console.log('server has started...');
// })

// Start the server

// Attach event listeners for uncaught exceptions and unhandled rejections

app.get("/", (req, res) => {
  res.json({
    message: "working fine",
  });

  process.on("unhandledRejection", (error) => {
    unhandledRejectionHandler(error);
  });
});