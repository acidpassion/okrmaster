const mongoose = require('mongoose');

const timesheetSchema = new mongoose.Schema({
  staffId: String,
  staffName: String,
  weekCommencing: Date,
  projectName: String,
  hours: Number
});

module.exports = mongoose.model('Timesheet', timesheetSchema);