const mongoose = require('mongoose');

const ratecardSchema = new mongoose.Schema({
  region: String,
  staffType: String,
  rate: Number
});

module.exports = mongoose.model('ratecard', ratecardSchema);