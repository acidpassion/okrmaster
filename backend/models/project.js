const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: String,
  originalFundingAsked: Number,
  actualFundingAllocated: Number,
  burnedFunding: Number
});

module.exports = mongoose.model('Project', projectSchema);