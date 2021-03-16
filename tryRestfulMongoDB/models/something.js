// Packages
const restful = require('node-restful');
const mongoose = restful.mongoose;

// Schema
const someSchema = new mongoose.Schema({
    name: String,
    description: String,
    value: Number
});

// Return model
module.exports = restful.model('Somethings', someSchema);
