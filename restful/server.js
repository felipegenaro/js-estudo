// Packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');      // Middleware

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('API is running on port 3000');
