const mongoose = require("mongoose");

const samajKeGauravSchema = new mongoose.Schema({
  name: String,
  profession: {
    type: String,
    enum: [
      "Doctor",
      "CA",
      "Engineer",
      "Karamchari/Adhikari",
      "Rajyanitik",
      "Shikshavedik",
      "Patrakar",
      "Samajsevi"
    ],
  },
  image: String, // URL of the image
  permanentAddress: String,
  fatherName: String,
  sevaarat: String,
  mobile: Number,
});

const SamajKeGaurav = mongoose.model("SamajKeGaurav", samajKeGauravSchema);

module.exports = SamajKeGaurav;
