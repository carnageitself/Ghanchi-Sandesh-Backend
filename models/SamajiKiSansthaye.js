const mongoose = require("mongoose");

const samajikSansthayeSchema = new mongoose.Schema({
  image: String,
  title: String,
  offlice: String,
  name: String,
  address: String,
  head: String,
  headPhoneNumber: Number,
  purpose: String,
  images: [String], // Array of image URLs
});

const SamajKiSansthaye = mongoose.model(
  "SamajKiSansthaye",
  samajikSansthayeSchema
);

module.exports = SamajKiSansthaye;
