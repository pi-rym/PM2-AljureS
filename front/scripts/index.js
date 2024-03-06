const seccionPeliculas = document.getElementById("allMoviesCards")

function renderFilms(pelicula) {
    const peliculaElemento = document.createElement('article')
    const tarjeta = document.createElement("div")

    tarjeta.classList.add("card__content")
    peliculaElemento.classList.add("responsiveBox")

    tarjeta.innerHTML =`
        <h3 id ="movieTitle">${pelicula.title}</h3>
        <p class="card__title">${pelicula.year}</p>
        <p class="card__title">${pelicula.director}</p>
        <p class="card__title">${pelicula.genre.join(', ')}</p>
        <p class="card__title">${pelicula.rate}</p>
        <img class="imageMovies" src="${pelicula.poster}">
    `
    seccionPeliculas.appendChild(peliculaElemento)
    peliculaElemento.appendChild(tarjeta)
}

const allmovies = data => data.map(renderFilms)

$.get('https://students-api.2.us-1.fl0.io/movies', allmovies)









