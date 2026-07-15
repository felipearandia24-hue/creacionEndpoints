const mongoose = require('mongoose');

const MascotaSchema = new mongoose.Schema({
    nombre: { type: String, required: [true,  "El nombre es requerido"], trim: true },
    especie: { type: String, required: true },
    _id_mascota: { type: String, required: true }
}, { _id: false });

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
    mascotas: [MascotaSchema]
});

module.exports = mongoose.model('Cliente', ClienteSchema);