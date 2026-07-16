const mongoose = require("mongoose");

const mascotaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"],
        trim: true
    },
    especie: {
        type: String,
        required: [true, "La especie es requerida"],
        trim: true
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente",
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Mascota", mascotaSchema);