const http = require("http");
const fs = require("fs").promises;

const host = "localhost";
const port = 8000;
let indexFile;

const requestListener = function(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
}

const server = http.createServer(requestListener);
fs.readFile("./index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`El servidor se está ejecutando en http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`No se pudo leer el archivo: ${err}`);
        process.exit(1);
    });
