const slowFunction = () => {
    let counter = 0;
    while (counter < 5000000000) {
        counter++;
    }
    return counter;
}

process.on("message", (message) => {
    if (message === "START") {
        console.log("El proceso hijo recibió el mensaje START");
        let slowResult = slowFunction();
        let message = `{"total":${slowResult}}`;
        process.send(message);
    }
})