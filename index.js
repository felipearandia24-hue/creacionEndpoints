const express = require('express')
const mongoose = require('mongoose');
const { objectId, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conexión exitosa'))
    .catch(err => console.log("No se pudo conectar", err));


app.get('/', (req, res) => {
        console.log("Entrando prueba");

    res.send({ mensaje: "El server está funcionando" });

});

app.get('/api/clientes', async (req, res) => {
    try {
        const listadoClientes = await mongoose.connection.collection('clientes').find({}).toArray();
        res.json(listadoClientes);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener los clientes", error });
    }
});

app.post('/api/clientes', async (req, res) => {
    const nuevoCliente = req.body;

    try {
        if (!nuevoCliente.nombre || !nuevoCliente.cedula) {
    return res.status(400).json({
        error: "Formato invalido, el cliente y cedula son obligatorios"
    });
}

        const resultado = await mongoose.connection.db.collection('clientes').insertOne(nuevoCliente);

        res.status(201).json({
            mensaje: "Cliente creado",
            id_generado: resultado.insertedId,
            datosGuardados: nuevoCliente
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error critico al crear el cliente" });
    }
});

app.put('/api/clientes/:id', async (req, res) => {
    try {
        const idCliente = req.params.id;
        const datosNuevos = req.body;

        const resultado = await mongoose.connection.db.collection('clientes').updateOne(
            { _id: new ObjectId(idCliente) },
            { $set: datosNuevos }
        );

        if (resultado.matchedCount === 0) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }

        res.json({
            mensaje: "Cliente actualizado correctamente", modificaciones: resultado.modifiedCount
        }
    );

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "No se pudo actualizar el cliente" });  
    }
});

app.delete('/api/clientes/:id', async (req, res) => {
    try {
        const idCliente = req.params.id;
        const resultado = await mongoose.connection.db.collection('clientes').deleteOne({
            _id: new ObjectId(idCliente)
        });

        if (resultado.deletedCount === 0) {
            return res.status(404).json({ error: "Cliente no encontrado en la BD o ya fue eliminado"});
        }

        res.json({mensaje: "No se pudo eliminar el cliente"});

    } catch (error) {
        res.status(500).json({error: "No se pudo eliminar el cliente"})
    }
});

app.listen(PORT, () => {
    console.log(`El backend está escuchando el localhost: ${PORT}`);
})