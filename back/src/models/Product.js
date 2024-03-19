//modelo 
//SCHEMA es como el modelo/ molde del producto 
//Forma que tendran los documentos de una seleccion 

const mongoose = require('mongoose')
const { Decimal128 } = mongoose.Schema.Types;

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: Decimal128,
    poster: String
}) 

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie;