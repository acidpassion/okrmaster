const express = require('express');
const router = express.Router();
const ratecardController = require('../controllers/ratecardController');

// Get all ratecards
router.get('/', ratecardController.getAllRatecards);

// Create a new ratecard
router.post('/', ratecardController.createRatecard);

// Get ratecard by region and staffType
router.get('/:region/:staffType', ratecardController.getRatecardByRegionAndStaffType);

// Update a ratecard by ID
router.put('/:id', ratecardController.updateRatecard);

// Delete a ratecard by ID
router.delete('/:id', ratecardController.deleteRatecard);

module.exports = router;