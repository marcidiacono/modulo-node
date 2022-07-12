const express = require("express");

const app = express();
const PORT = 3000;
const HOST = "localhost";

app.use(express.json());

let users = [
    {
        "id": 1,
        "firstName": "Homero",
        "lastName": "Simpson",
    },
    {
        "id": 2,
        "firstName": "Bart",
        "lastName": "Simpson",
    },
    {
        "id": 3,
        "firstName": "Lisa",
        "lastName": "Simpson",
    },
]; 


app.get("/users", (request, response) => {
    response.json(users);
});

app.get("/users/:id", (request, response) => {
    const userId = Number(request.params.id);
    const getUser = users.find((user) => user.id === userId);
    if (!getUser) {
        response.status(500).send("Usuario no encontrado.");
    } else {
        response.json(getUser);
    }
})

app.post("/users", (request, response) => {
    const newUser = request.body;
    users.push(newUser);
    response.json(users); 
});

app.put("/users/:id", (request, response) => {
    const userId = Number(request.params.id);
    const body = request.body;
    const user = users.find((user) => user.id === userId);
    const index = users.indexOf(user);
    if (!user) {
        response.status(500).send("Usuario no encontrado.");
    } else {
        const updatedUser = { ...user, ...body }
        users[index] = updatedUser;
        response.json(users);
    }
});

app.delete("/users/:id", (request, response) => {
    const userId = Number(request.params.id);
    const newUsers = users.filter((user) => user.id != userId);
    if ((users.length - 1) != newUsers.length) {
        response.status(500).send("Usuario no se encontró");
    } else {
        users = newUsers;
        response.send(users);
    }
});


app.listen(PORT, HOST, () => {
    console.log(`El servidor express se está ejecutando en http://${HOST}:${PORT}/`);
})