const mongoose = require('mongoose');

const samajikSansthayeSchema = new mongoose.Schema({
  name: String,
  address: String,
  head: String,
  headPhoneNumber: String,
  purpose: String,
  images: [String] // Array of image URLs
});

const SamajikSansthaye = mongoose.model('SamajikSansthaye', samajikSansthayeSchema);

module.exports = SamajikSansthaye;
