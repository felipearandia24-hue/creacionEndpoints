const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();
const Cliente = require('../models/Cliente');
const { objectId, ObjectId } = require('mongodb');
require('dotenv').config();



const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conexión exitosa'))
    .catch(err => console.log("No se pudo conectar", err));

router.get('/clientes', async (req, res) => {
    try {
        const listadoClientes = await mongoose.connection.collection('clientes').find({}).toArray();
        res.json(listadoClientes);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener los clientes", error });
    }
});


router.patch('/actualizar-estado/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nuevoEstado } = req.body;

        const cliente = await Cliente.findById(id);

        if (!cliente) {
            return res.status(404).json({ 
                mensaje: 'El cliente no existe.' 
            });
        }

        if (cliente.estado === 'finalizado') {
            return res.status(403).json({ 
                mensaje: 'Prohibido: El cliente ya se encuentra en estado "finalizado" y no admite más modificaciones.' 
            });
        }

        cliente.estado = nuevoEstado;
        await cliente.save();

        res.status(200).json({
            mensaje: 'Estado actualizado correctamente.',
            cliente
        });

    } catch (error) {
        res.status(500).json({ 
            mensaje: 'Error interno del servidor.', 
            error: error.message 
        });
    }
});


module.exports = router;