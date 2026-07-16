const Cliente = require("../models/Cliente");

const obtenerCliente = async (req, res) => {
    try {
        const cliente = await Cliente.find().populate('historiales_clinicos');
        res.json(cliente);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al consultar los clientes" })
    }
}

const actualizarCliente = async (req, res) => {
    try {
        const clienteActualizado = await Cliente.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!clienteActualizado) {
            return res.status(404).json({ error: "El cliente no existe" });
        };

        res.json(clienteActualizado);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al actualizar el cliente" })

    }
}

const eliminarCliente = async (req, res) => {
    try {
        const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);
        if (!clienteEliminado) return res.status(404).json({ error: "El cliente no existe" });
        res.json({ mensaje: "Cliente eliminado con éxito", clienteEliminado });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al eliminar el usuario" })
    }
}

const crearCliente = async (req, res) => {
    try {
        const clienteNuevo = new Cliente(req.body);
        const resultado = await clienteNuevo.save();

        res.status(201).json({
            mensaje: "Cliente creado exitosamente",
            id_generado: resultado._id
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al crear el usuario" })
    }
}

const actualizarEstadoCliente = async (req, res) => {
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
}


module.exports = {
    obtenerCliente,
    actualizarCliente,
    eliminarCliente,
    crearCliente,
    actualizarEstadoCliente
}