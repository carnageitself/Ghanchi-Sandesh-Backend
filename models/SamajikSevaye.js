const mongoose = require("mongoose");

const samajikSevaSchema = new mongoose.Schema({
  title: String,
  purpose: {
    type: String,
    enum: ["ambulance", "social temple", "social hostel", "social house"],
  },
  operator: String,
  address: String,
  phone: Number,
  mobile: Number,
  administrator: String,
  image: String,
});

const SamajikSevaye = mongoose.model("SamajikSevaye", samajikSevaSchema);

module.exports = SamajikSevaye;
