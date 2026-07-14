const mongoose = require('mongoose');

const MascotaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    especie: { type: String, required: true },
    _id_mascota: { type: String, required: true }
}, { _id: false }); // Evita que Mongoose genere un _id interno para cada mascota si ya tienes _id_mascota

const ClienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    estado: {
        type: String,
        default: 'pendiente'
    },
    mascotas: [MascotaSchema] // Aquí definimos que "mascotas" es un arreglo con la estructura anterior
});

module.exports = mongoose.model('Cliente', ClienteSchema);