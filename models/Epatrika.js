const mongoose = require("mongoose");

const patrikaSchema = new mongoose.Schema({
  pdf: String,
  Month: String,
});

const Epatrika = mongoose.model("Epatrika", patrikaSchema);
module.exports = Epatrika;
