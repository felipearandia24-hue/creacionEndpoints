const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();
const Cliente = require('../models/Historial_clinico');
const { objectId, ObjectId } = require('mongodb');
const clienteController = require("../controllers/historialesController")
require('dotenv').config();



const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conexión exitosa'))
    .catch(err => console.log("No se pudo conectar", err));

router.post('/historiales', clienteController.crearHistorial);

router.get('/historiales', clienteController.obtenerHistoriales);

router.put('/historiales/:id', clienteController.actualizarHistorial);

router.delete('/historiales/:id', clienteController.eliminarHistorial);

module.exports = router;