

const seccionPeliculas = document.getElementById("allMoviesCards")

function renderFilms(pelicula) {
    const peliculaElemento = document.createElement('article')
    const tarjeta = document.createElement("div")

    tarjeta.classList.add("card__content")

    tarjeta.innerHTML =`
        <h3>${pelicula.title}</h3>
        <p class="card__title">${pelicula.year}</p>
        <p class="card__title">${pelicula.director}</p>
        <p class="card__title">${pelicula.genre.join(', ')}</p>
        <p class="card__title">${pelicula.rate}</p>
        <img class="imageMovies" src="${pelicula.poster}">
    `
    seccionPeliculas.appendChild(peliculaElemento)
    peliculaElemento.appendChild(tarjeta)
}

$.get('https://students-api.2.us-1.fl0.io/movies', tempData.map(renderFilms))

// const newArray = tempData.map((pelicula)=>{
//     const tarjeta = document.createElement("div")

//     const h3 = document.createElement("h3")
//     const anio = document.createElement("p")
//     const Director = document.createElement("p")
//     const genero = document.createElement("p")
//     const ranking = document.createElement("p")
//     const imagen = document.createElement("img")

//     h3.innerHTML = pelicula.title
//     anio.innerHTML = pelicula.year
//     Director.innerHTML = pelicula.director
//     genero.innerHTML = pelicula.genre.join(', ')
//     ranking.innerHTML = pelicula.rate
//     imagen.src = pelicula.poster

//     tarjeta.classList.add("card__content")
//     h3.classList.add("card__title")
//     anio.classList.add("card__title")
//     Director.classList.add("card__title")
//     genero.classList.add("card__title")
//     ranking.classList.add("card__title")
//     imagen.classList.add("imageMovies")

//     tarjeta.appendChild(h3)
//     tarjeta.appendChild(anio)
//     tarjeta.appendChild(Director)
//     tarjeta.appendChild(genero)
//     tarjeta.appendChild(ranking)
//     tarjeta.appendChild(imagen)

//     return tarjeta
// })

// newArray.forEach(card => seccionPeliculas.appendChild(card))









