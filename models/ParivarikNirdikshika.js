const mongoose = require("mongoose");

const familySchema = new mongoose.Schema({
  name: String,
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  fatherName: String,
  surname: String,
  mainAddress: String,
  currentAddress: String,
  workingAddress: String,
  dob: Date,
  gotra: String,
  qualification: String,
  profession: String,
  mobile: Number,
  phone: Number,
  image: String,
  email: String,
  other: String,

  familyMembers: [
    {
      name: String,
      relation: String,
      dob: Date,
      qualification: String,
      profession: String,
      mobile: Number,
    },
  ],
});

const ParivarikNirdikshika = mongoose.model(
  "ParivarikNirdikshika",
  familySchema
);

module.exports = ParivarikNirdikshika;
