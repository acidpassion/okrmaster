const Ratecard = require('../models/ratecard');

// Get all ratecards
exports.getAllRatecards = async (req, res) => {
    try {
      console.log("Fetching all ratecards...");  // Debug log
      const ratecards = await Ratecard.find();
      console.log("Ratecards found:", ratecards);  // Debug log
      if (ratecards.length === 0) {
        return res.status(404).json({ message: "No ratecards found" });
      }
      res.status(200).json(ratecards);
    } catch (err) {
      console.error("Error fetching ratecards:", err);
      res.status(500).json({ error: err.message });
    }
  };

// Create a new ratecard
exports.createRatecard = async (req, res) => {
  try {
    const newRatecard = new Ratecard(req.body);
    await newRatecard.save();
    res.status(201).json(newRatecard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get ratecard by region and staffType
exports.getRatecardByRegionAndStaffType = async (req, res) => {
  try {
    const ratecard = await Ratecard.findOne({ region: req.params.region, staffType: req.params.staffType });
    if (ratecard) {
      res.status(200).json(ratecard);
    } else {
      res.status(404).json({ message: 'Ratecard not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a ratecard by ID
exports.updateRatecard = async (req, res) => {
  try {
    const updatedRatecard = await Ratecard.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedRatecard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a ratecard by ID
exports.deleteRatecard = async (req, res) => {
  try {
    await Ratecard.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};