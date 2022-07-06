const http = require("http");

const host = "localhost";
const port = 8000;
const books = JSON.stringify([
    { title: "El Aleph", author: "Jorge Luis Borges", year: 1949 },
    { title: "Cálculo Numérico", author: "Chapra", year: 2011 },
]);
const authors = JSON.stringify([
    { name: "Jorge Luis Borges", country: "Argentina" },
    { name: "Chapra", country: "EEUU" },
]);

const requestListener = function(req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/books":
            res.writeHead(200);
            res.end(books);
            break;
        case "/authors":
            res.writeHead(200);
            res.end(authors);
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error: "Not Found"}));
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`El servidor se está ejecutando en http://${host}:${port}`);
});