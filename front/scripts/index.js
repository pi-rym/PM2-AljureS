const seccionPeliculas = document.getElementById("allMoviesCards")

const newArray = tempData.map((pelicula)=>{
    const tarjeta = document.createElement("div")

    const h3 = document.createElement("h3")
    const anio = document.createElement("p")
    const Director = document.createElement("p")
    const genero = document.createElement("p")
    const ranking = document.createElement("p")
    const imagen = document.createElement("img")

    h3.innerHTML = pelicula.title
    anio.innerHTML = pelicula.year
    Director.innerHTML = pelicula.director
    genero.innerHTML = pelicula.genre.join(', ')
    ranking.innerHTML = pelicula.rate
    imagen.src = pelicula.poster

    tarjeta.appendChild(h3)
    tarjeta.appendChild(anio)
    tarjeta.appendChild(Director)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(ranking)
    tarjeta.appendChild(imagen)

    return tarjeta
})

newArray.forEach(tarjeta => seccionPeliculas.appendChild(tarjeta))









