const dotenv = require("dotenv");
const connectDb = require("./config/db.js");
const uncaughtExceptionHandler = require("./middleware/uncaughtExceptionHandler.js");
const unhandledRejectionHandler = require("./middleware/unhandledRejectionHandler.js");
const cloudinary=require('cloudinary')
const port = process.env.PORT || 3000;
const app = require("./app.js");
const server = app.listen(port, () => {
  console.log('server has started...',port);
})

process.on("uncaughtException", (error) => {
  uncaughtExceptionHandler(error, server);
});


if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "config/.env" });
}
// @ts-ignore
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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