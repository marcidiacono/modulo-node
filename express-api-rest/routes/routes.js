const express = require("express");
const Model = require("../models/model");
const router = express.Router();

// Método POST para la creación de datos en la BD.
router.post("/users", async (req, res) => {
    const data = new Model({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Método GET para la obtención de todos los datos de la BD.
router.get("/users", async (req, res) => {
    try {
        const data = await Model.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Método GET para la obtención de un dato de la BD.
router.get("/users/:id", async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Método PUT(PATCH) para la actualización de un dato de la BD.
router.put("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new : true };
        const data = await Model.findByIdAndUpdate(
            id, 
            updatedData, 
            options
        );
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Método DELETE para la eliminación de un dato de la BD.
router.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Esto es un agregado que no tiene nada que ver con las rutas propias de un usuario pero es para mostrarles qué ocurre cuando el body de una solicitud viene codificada.
router.post("/example", (req, res) => {
    console.log(req.body);
    res.end();
});

module.exports = router;
