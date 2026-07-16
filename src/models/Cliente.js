const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"],
        trim: true
    },
    cedula: {
        type: String,
        required: [true, "La cédula es requerida"],
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    },
    correo: {
        type: String,
        required: [true, "El correo es requerido"],
        unique: true,
        lowercase: true,
        trim: true
    },
    estado: {
        type: String,
        default: "pendiente"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Cliente", clienteSchema);