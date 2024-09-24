const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

// Get all staff
router.get('/', staffController.getAllStaff);

// Create a new staff
router.post('/', staffController.createStaff);

// Get staff by staffId
router.get('/:staffId', staffController.getStaffById);

// Update a staff by ID
router.put('/:id', staffController.updateStaff);

// Delete a staff by ID
router.delete('/:id', staffController.deleteStaff);

module.exports = router;