const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();
const Cliente = require('../models/Cliente');
const { objectId, ObjectId } = require('mongodb');
const clienteController = require("../controllers/clienteController")
require('dotenv').config();



const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conexión exitosa'))
    .catch(err => console.log("No se pudo conectar", err));

router.post('/clientes', clienteController.crearCliente); 

router.get('/clientes', clienteController.obtenerCliente);

router.put('/clientes/:id', clienteController.actualizarCliente);

router.delete('/clientes/:id', clienteController.eliminarCliente);

router.patch('/clientes/estado/:id', clienteController.actualizarEstadoCliente);


module.exports = router;