// Packages
const express = require('express');
const router = express.Router();

// Models
const Something = require('../models/something');

// Routes
Something.methods(['get', 'put', 'post', 'delete']);
Something.register(router, '/somethings');

// Return router
module.exports = router;
