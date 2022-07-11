const { EventEmitter } = require("events");

class BookingManager extends EventEmitter {

    constructor(rooms) {
        super();
        this.rooms = rooms;
    }

    reserve(email, price) {
        if (this.rooms > 0) {
            this.rooms--;
            this.emit("reserve", email, price, Date.now());
            return;
        } else {
            this.emit("error", new Error("No hay habitaciones disponibles"));
        }
    }

    /* Esto es un agregado sin sentido, sólo para mostrar el concepto de un error
    generado en varios métodos y escuchados por un mismo listener. 
    */
    test() {
        this.emit("error", new Error("Este es un error distinto."));
    }
}

module.exports = BookingManager;