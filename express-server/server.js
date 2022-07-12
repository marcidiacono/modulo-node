const express = require("express");
const serveIndex = require("serve-index");
const path = require("path");

const app = express();
const port = 3000;
const host = "localhost";

/* 

app.use((req, res, next) => {
    console.log("Fecha: ", Date.now());
    next();
});

app.use("/request-type", (req, res, next) => {
    console.log("Tipo de solicitud: ", req.method);
    next();
});

app.use("/public", express.static("public"));

app.use("/public", serveIndex("public"));

*/

app.use(express.json());



app.get("/", (req, res) => {
    res.send("Respuesta exitosa.");
});

app.get("/home", (req, res) => {
    //res.status(500).send("Ha ocurrido un error interno en el servidor");
    //res.sendStatus(500);
    res.append("Content-Type", "application/json");
    res.append("Connection", "keep-alive");
    res.append("Set-Cookie", "file=server.js");
    res.send('{"message" : "¡Hola Express!"}');
    res.end();
});

app.get("/res-test", (req, res) => {
    res.redirect("https://www.google.com");
});

app.get("/users/:userId", (req, res) => {
    console.log(req.params.userId);
});

app.get("/search", (req, res) => {
    console.log(req.query.keyName);
});

app.post("/login", (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.header("Content-Type"));
    console.log(req.header("User-Agent"));
    console.log(req.header("Authorization"));
});

app.get("/anatomy", (req, res) => {
    console.log(req.protocol);
    console.log(req.hostname);
    console.log(req.socket.localPort);
    console.log(req.path);
    console.log(req.originalUrl);
    console.log(req.method);
});

// Uso del motor de vistas ejs para renderizar un html

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/indexFile", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, host, () => {
    console.log(`Servidor iniciado en http://${host}:${port}/`);
});
