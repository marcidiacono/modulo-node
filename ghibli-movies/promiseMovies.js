const axios = require("axios");
const fs = require("fs").promises;

axios.get("https://ghibliapi.herokuapp.com/films")
    .then(response => {
        console.log("Procesando el listado de películas...");
        let movieList = "";
        response.data.forEach(movie => {
            movieList +=`${movie["title"]}, ${movie["release_date"]}\n`;
        })
        return fs.writeFile("promiseMovies.csv", movieList);
    })
    .then(() => {
        console.log("Películas guardades en promiseMovies.csv");
    })
    .catch((error) => {
        console.error(`No se pudo guardar el archivo de películas: ${error}`);
    });