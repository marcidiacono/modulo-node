const BookingManager = require("./bookingManager");

const bookingManager = new BookingManager(10);

bookingManager.on("reserve", () => {
    console.log("¡Alguien ha reservado una habitación!");
});

bookingManager.reserve("hsimpson@mail.com", 100);
bookingManager.reserve("nflanders@mail.com", 100);

bookingManager.once("reserve", () => {
    console.log("¡Se asignó una promo por única vez!");
});

bookingManager.reserve("nflanders@mail.com", 100);
bookingManager.reserve("hsimpson@mail.com", 100);