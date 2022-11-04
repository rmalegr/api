const {Router} = require("express");
const router = Router();

const publicaciones = require("../utils/propertiesRent.json");

router.get("/publicaciones/:id", async (req, res) => {
	let {id} = req.params;
	id = parseInt(id);

	const articuloPublicado = publicaciones.find((u) => u.id === id); //Retorna el objeto {} encontrado -> Retorna un Arreglo [{}]
	if (articuloPublicado) res.status(200).json(articuloPublicado);
	if (articuloPublicado)
		res.status(404).send("No se encontró el usuario con ese ID");
});

module.exports = router;
