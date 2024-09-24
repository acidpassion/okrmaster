const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Get all projects
router.get('/', projectController.getAllProjects);

// Create a new project
router.post('/', projectController.createProject);

module.exports = router;