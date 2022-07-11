const BookingManager = require("./bookingManager");
const EmailService = require("./emailService");
const DatabaseService = require("./databaseService");

const bookingManager = new BookingManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

bookingManager.on("reserve", (email, price, date) => {
    emailService.send(email);
    databaseService.save(email, price, date);
});

bookingManager.on("error", (error) => {
    console.error(`Disculpe. no se pudo completar su reserva: ${error}`);
});

console.log(`Tenemos ${bookingManager.listenerCount("reserve")} listeners(s) para el evento reserve.`);

console.log(`Tenemos ${bookingManager.listenerCount("error")} listeners(s) para el evento error.`);

const onReserve = () => {
    console.log("La reserva anticipada con el 10% de descuento terminará pronto.");
}

bookingManager.on("reserve", onReserve);

console.log(`Agregamos un nuevo detector de eventos a la cuenta de reserve, ahora tengo: ${bookingManager.listenerCount("reserve")}.`);

bookingManager.reserve("hsimpson@mail.com", 100);

bookingManager.off("reserve", onReserve);

console.log(`Eliminamos un detector, ahora tengo: ${bookingManager.listenerCount("reserve")}.`);

bookingManager.reserve("hsimpson@mail.com", 100);
bookingManager.reserve("hsimpson@mail.com", 100);
bookingManager.reserve("hsimpson@mail.com", 100);
bookingManager.test();