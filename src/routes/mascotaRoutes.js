const express = require("express");
const router = express.Router();

const mascotaController = require("../controllers/mascotaController");

router.get("/mascotas", mascotaController.obtenerMascotas);

router.post("/mascotas", mascotaController.crearMascota);

router.put("/mascotas/:id", mascotaController.actualizarMascota);

router.delete("/mascotas/:id", mascotaController.eliminarMascota);

module.exports = router;