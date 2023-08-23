const mongoose = require('mongoose');

const marriageProfileSchema = new mongoose.Schema({
  name: String,
  gender: String, // 'male' or 'female'
  age: Number,
  address: String,
  occupation: String,
  education: String,
  mobile: String,
  email: String,
  other: String,
  familyBackground: String,
  photos: [String], // Array of photo URLs
  preferences: String,
  familyDetails: {
    familyOccupations: String,
    grandfatherName: String,
    permanentAddress: String,
    currentAddress: String,
    father: {
      profession: String,
      address: String,
      mobile: String,
      email: String
    },
    mother: {
      name: String,
    },
    grannyHouse: {
      mamaName: String,
      mamiName: String,
      address: String
    }
  }
});

const MarriageProfile = mongoose.model('MarriageProfile', marriageProfileSchema);

module.exports = MarriageProfile;
