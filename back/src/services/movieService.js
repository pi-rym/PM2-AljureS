const axios = require("axios")

module.exports ={
    getServiceMovies: async () =>{
        try {
            const movies = await axios ('https://students-api.up.railway.app/movies')
            return movies.data
        } catch (error) {
            console.log('no te funciono wey, algo paso');
        }
    }
}