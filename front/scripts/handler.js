const renderFilms = require("./renderCards")

/*
    ? Requerir axios en el módulo de JavaSript donde estemos realizando la petición.

    ?Realizar la petición a la URL que veníamos trabajando utilizando el método get de axios.

    Manejar la asincronía de esta operación utilizando una de las dos estrategias vistas en la clase:

    Promesas, definiendo con el método then un success handler y con método catch un error handler.

*/
const axios = require("axios")



const getFilms =()=>{
    const promiseMovies = axios.get("https://students-api.up.railway.app/movies")

    promiseMovies
        .then((res)=>{
            res.data.forEach(film => renderFilms(film))
            
        })
        .catch((err)=>{
            console.error(err);
            console.log('Sorry for the inconvenience, movies loading...');
        })
    }


module.exports = getFilms 



