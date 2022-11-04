const {Router} = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers

const publicaciones = require("./publicaciones");

router.use("/", publicaciones);

module.exports = router;
