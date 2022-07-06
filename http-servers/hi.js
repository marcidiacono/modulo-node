const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = function(req, res) {
    res.writeHead(200);
    res.end("Hola Gente");
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`El servidor se está ejecutando en http://${host}:${port}`);
});