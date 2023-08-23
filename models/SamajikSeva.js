const mongoose = require('mongoose');

const samajikSevaSchema = new mongoose.Schema({
  title: String,
  purpose: {
    type: String,
    enum: ['ambulance', 'social temple', 'social hostel', 'social house']
  },
  operator: String,
  address: String,
  phone: String,
  mobile: String,
  administrator: String,
  image: String

});

const SamajikSeva = mongoose.model('SamajikSeva', samajikSevaSchema);

module.exports = SamajikSeva;
