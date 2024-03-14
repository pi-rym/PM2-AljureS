const { getServiceMovies } = require('../services/movieService')

module.exports ={
    getMovies: async (req, res )=>{
        try {
            const movie = await getServiceMovies();
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
        
    }
}