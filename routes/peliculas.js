const express = require("express");
const router = express.Router();
const controller = require("../controllers/peliculas");

router.post("/crear", controller.crear);
router.get("/listar", controller.listar);
router.get("/listarUno/:id", controller.listarUno);
router.delete("/borrar/:id", controller.borrar);
router.put("/editar/:id", controller.editar);

module.exports = router;