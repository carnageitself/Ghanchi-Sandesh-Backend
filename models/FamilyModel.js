const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({
  name: String,
  fatherName: String,
  mainAddress: String,
  currentAddress: String,
  workingAddress: String,
  dob: Date,
  gotra: String,
  qualification: String,
  profession: String,
  mobile: String,
  phone: String,
  image:String,
  email: String,
  other: String,
  familyMembers: [
    {
      name: String,
      relation: String,
      number: String,
      qualification: String,
      profession: String
    }
  ]
});

const Family = mongoose.model('Family', familySchema);

module.exports = Family;
