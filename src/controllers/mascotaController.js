const Mascota = require("../models/Mascota");

const obtenerMascotas = async (req, res) => {
    try {
        const mascotas = await Mascota.find().populate("cliente");

        res.json(mascotas);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al consultar las mascotas"
        });
    }
};

const crearMascota = async (req, res) => {
    try {

        const nuevaMascota = new Mascota(req.body);
        const resultado = await nuevaMascota.save();

        res.status(201).json({
            mensaje: "Mascota creada correctamente",
            id_generado: resultado._id
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la mascota"
        });
    }
};

const actualizarMascota = async (req, res) => {
    try {

        const mascotaActualizada = await Mascota.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!mascotaActualizada) {
            return res.status(404).json({
                error: "La mascota no existe"
            });
        }

        res.json(mascotaActualizada);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al actualizar la mascota"
        });
    }
};

const eliminarMascota = async (req, res) => {
    try {

        const mascotaEliminada = await Mascota.findByIdAndDelete(req.params.id);

        if (!mascotaEliminada) {
            return res.status(404).json({
                error: "La mascota no existe"
            });
        }

        res.json({
            mensaje: "Mascota eliminada correctamente",
            mascotaEliminada
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al eliminar la mascota"
        });
    }
};

module.exports = {
    obtenerMascotas,
    crearMascota,
    actualizarMascota,
    eliminarMascota
};