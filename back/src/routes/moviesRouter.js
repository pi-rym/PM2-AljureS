const { Router } = require("express")
const { getMovies, createMovie } = require("../controllers/index")

const moviesRouter = Router()

moviesRouter.get("/", getMovies)
moviesRouter.post("/", createMovie)


module.exports = moviesRouter

//Preparar en nuestro enrutador un nuevo endpoint que se encargue de recibir una petición de método POST a “/movies”. Al recibirla, ejecutar la lógica definida por el controlador implementado en el punto anterior. 