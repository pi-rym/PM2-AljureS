const axios = require("axios")
class Movie {
    constructor({ title, year, director, duration, genre, rate, poster }){
        if (!title || !poster || !director) {
            throw new Error('Missing required properties: title, poster or director')
        }
        this.title= title,
        this.poster = poster,
        this.year = year,
        this.director = director,
        this.duration = duration,
        this.genre = genre,
        this.rate = rate
    }
}

module.exports ={
    getServiceMovies: async () =>{
        try {
            const movies = await axios('https://students-api.up.railway.app/movies')
            const movieConstructor = movies.data.map((peli) => new Movie(peli))
            return movieConstructor
        } catch (error) {
            console.error('no te funciono wey, algo paso');
        }
    }
}