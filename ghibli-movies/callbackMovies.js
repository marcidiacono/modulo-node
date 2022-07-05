const request = require("request");
const fs = require("fs");

request("https://ghibliapi.herokuapp.com/films", (error, response, body) => {
    if (error) {
        console.error(`No se pudo hacer la solicitud a la API: ${error.message}`);
        return;
    }
    if (response.statusCode != 200) {
        console.error(`Se esperaba un código de estado 200 pero se recibió ${response.statusCode}`);
        return;
    }
    console.log("Procesando el listado de películas...");
    movies = JSON.parse(body);
    let movieList = "";
    movies.forEach(movie => {
        movieList +=`${movie["title"]}, ${movie["release_date"]}\n`;
    });
    fs.writeFile("callbackMovies.csv", movieList, (error) => {
        if (error) {
            console.log(`No se pudo grabar las películas en el archivo: ${error}`);
            return;
        }
        console.log(`Lista de películas guardadas en callbackMovies.csv`);
    });
});
