const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  staffId: String,
  staffName: String,
  staffType: String,
  region: String
});

module.exports = mongoose.model('Staff', staffSchema);