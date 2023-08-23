const mongoose = require('mongoose');

const samajKeGauravSchema = new mongoose.Schema({
  name: String,
  profession: {
    type: String,
    enum: ['doctor', 'politician', 'teacher', 'officer', 'ca', 'engineer', 'karmchari', 'social worker']
  },
  image: String, // URL of the image
  permanentAddress: String,
  fatherName: String,
  sevaarat: String
});

const SamajKeGaurav = mongoose.model('SamajKeGaurav', samajKeGauravSchema);

module.exports = SamajKeGaurav;
