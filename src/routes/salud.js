const { timeStamp } = require("node:console")
const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
    res.status(200).json({estado: "Servidor funcionando correctamente", timeStamp: new Date().toString})
});

module.exports = router;