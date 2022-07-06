const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = function(req, res) {
    res.setHeader("ContentType", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=students.csv");
    res.writeHead(200);
    res.end(`sep=,\nid,name,email\n1,Bart Simpson,bsimpson@mail.com`);
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`El servidor se está ejecutando en http://${host}:${port}`);
});