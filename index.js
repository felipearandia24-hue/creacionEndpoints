const express = require('express')
const mongoose = require('mongoose');
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

app.listen(PORT, () => {
    console.log(`El backend está escuchando el localhost: ${PORT}`);
})