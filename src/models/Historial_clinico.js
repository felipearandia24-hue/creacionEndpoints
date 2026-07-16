const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Mongoose.Schema({
  _id_historia: {
    type: String,
    required: true,
    trim: true
  },
  _id_mascota: {
    type: String,
    required: true,
    trim: true
  },
  fecha: {
    type: Date,
    required: true
  },
  diagnostico: {
    type: String,
    required: true
  },
  tratamiento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tratamiento',
    required: true
  },
  peso: {
    type: Number,
    required: true
  }
 }, {tymestamps: true});

 module.exports = mongoose.model('Categoria', categoriaSchema);