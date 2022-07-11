const http = require("http");
const { fork } = require("child_process");

const host = "localhost";
const port = 8000;

const requestListener = function(req, res) {
    if (req.url === "/total") {
        const child = fork(__dirname + "/getCount");
        child.on("message", (message) => {
            console.log(`Devolviendo resultados de /total`);
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end(message);
        })
        child.send("START");
    } else if (req.url === "/hello") {
        console.log(`Devolviendo resultados de /hello`);
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(`{"message":"hola"}`);
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`El servidor se está ejecutando en http://${host}:${port}`);
});
