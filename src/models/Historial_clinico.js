const mongoose = require('mongoose');

const historialSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true
  },
  diagnostico: {
    type: String,
    required: true
  },
  tratamiento: {
    type: String,
    required: true
  },
  peso: {
    type: Number,
    required: true
  },
  mascota: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mascota",
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('HistorialClinico', historialSchema);