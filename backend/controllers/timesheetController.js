const Timesheet = require('../models/timesheet');

// Get all timesheets
exports.getAllTimesheets = async (req, res) => {
  try {
    const timesheets = await Timesheet.find();
    res.status(200).json(timesheets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new timesheet
exports.createTimesheet = async (req, res) => {
  try {
    const newTimesheet = new Timesheet(req.body);
    await newTimesheet.save();
    res.status(201).json(newTimesheet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get timesheets by projectName
exports.getTimesheetsByProject = async (req, res) => {
  try {
    const timesheets = await Timesheet.find({ projectName: req.params.projectName });
    res.status(200).json(timesheets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a timesheet by ID
exports.updateTimesheet = async (req, res) => {
  try {
    const updatedTimesheet = await Timesheet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTimesheet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a timesheet by ID
exports.deleteTimesheet = async (req, res) => {
  try {
    await Timesheet.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};