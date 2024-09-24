const express = require('express');
const router = express.Router();
const timesheetController = require('../controllers/timesheetController');

// Get all timesheets
router.get('/', timesheetController.getAllTimesheets);

// Create a new timesheet
router.post('/', timesheetController.createTimesheet);

// Get timesheets by projectName
router.get('/project/:projectName', timesheetController.getTimesheetsByProject);

// Update a timesheet by ID
router.put('/:id', timesheetController.updateTimesheet);

// Delete a timesheet by ID
router.delete('/:id', timesheetController.deleteTimesheet);

module.exports = router;