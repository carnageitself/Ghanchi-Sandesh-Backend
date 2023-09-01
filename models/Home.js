const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  location: String,
  images: [String],
});

const Home = mongoose.model("Home", homeSchema);
module.exports = Home;