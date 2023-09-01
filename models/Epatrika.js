const mongoose = require("mongoose");

const patrikaScheme = new mongoose.SchemaType({
  pdf: String,
  Month: String,
});

const Epatrika = ("Epatrika", patrikaScheme);
module.exports = Epatrika;