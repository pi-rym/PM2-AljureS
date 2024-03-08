const renderFilms = require("./renderCards")

const getFilms = $.get('https://students-api.2.us-1.fl0.io/movies', data => data.map(renderFilms))

module.exports = {
    getFilms
}
