// Packages
const restful = require('node-restful');
const mongoose = restful.mongoose;

// Schema
const someSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    valor: Number
});

// Return model
module.exports = restful.model('Somethings', someSchema);
