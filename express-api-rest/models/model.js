const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
});

// El nombre "Data" es el nombre con el que accedo a este modelo. 
module.exports = mongoose.model("Data", dataSchema);