const mongoose = require("mongoose");

const marriageProfileSchema = new mongoose.Schema({
  name: String,
  surname: String,
  city: String,
  dob: Date,
  gender: String, // 'male' or 'female'
  age: Number,
  address: String,
  occupation: String,
  education: String,
  mobile: Number,
  email: String,
  other: String,
  height: Number,
  familyBackground: String,
  photos: [String], // Array of photo URLs
  preferences: String,
  familyDetails: {
    familyOccupations: String,
    grandfatherName: String,
    permanentAddress: String,
    currentAddress: String,
    occupationAddress: String,
    father: {
      name: String,
      profession: String,
      address: String,
      mobile: Number,
      email: String,
    },
    mother: {
      name: String,
    },
    grannyHouse: {
      mamaName: String,
      mamiName: String,
      address: String,
    },
  },
});

const SagayiSagpan = mongoose.model("SagayiSagpan", marriageProfileSchema);

module.exports = SagayiSagpan;
