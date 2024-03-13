const { Router } = require("express")
const { getMovies } = require("../controllers/index")

const moviesRouter = Router()

moviesRouter.get("/", getMovies)

module.exports = moviesRouter