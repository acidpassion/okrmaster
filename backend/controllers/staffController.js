const Staff = require('../models/staff');

// Get all staff
exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new staff
exports.createStaff = async (req, res) => {
  try {
    const newStaff = new Staff(req.body);
    await newStaff.save();
    res.status(201).json(newStaff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get staff by staffId
exports.getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findOne({ staffId: req.params.staffId });
    if (staff) {
      res.status(200).json(staff);
    } else {
      res.status(404).json({ message: 'Staff not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a staff by ID
exports.updateStaff = async (req, res) => {
  try {
    const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedStaff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a staff by ID
exports.deleteStaff = async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};