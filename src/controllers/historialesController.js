const Historiales = require('../models/Historial_clinico');

const obtenerHistoriales = async (req, res) => {
    try {
        const historiales = await Historiales.find().populate({
            path: "mascota",
            populate: {
                path: "cliente"
            }
        });
        res.json(historiales);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al consultar los historiales" })
    }
}

const crearHistorial = async (req, res) => {
    try {
        const historialNuevo = new Historiales(req.body);
        const resultado = await historialNuevo.save();
        res.status(201).json({
            mensaje: "Historial creado exitosamente",
            id_generado: resultado._id
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al crear el historial" });
    }
}

const actualizarHistorial = async (req, res) => {
    try {
        const historialActualizado = await Historiales.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(historialActualizado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al actualizar el historial" });
    }
}

const eliminarHistorial = async (req, res) => {
    try {
        const historialEliminado = await Historiales.findByIdAndDelete(req.params.id);
        if (!historialEliminado) {
            return res.status(404).json({ error: "Historial no encontrado" });
        }
        res.json({ mensaje: "Historial eliminado con éxito", historialEliminado });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al eliminar el historial" });
    }
}


module.exports = {
    obtenerHistoriales,
    crearHistorial,
    actualizarHistorial,
    eliminarHistorial
}