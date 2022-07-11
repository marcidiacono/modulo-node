const { spawn } = require("child_process");

const child = spawn("findstr", ["return", "./listFiles.js"]);

child.stdout.on("data", (data) => {
    console.log(`stdout:\n${data}`);
});

child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
});

child.on("error", (error) => {
    console.error(`error: ${error.message}`);
});

child.on("close", (code) => {
    console.log(`El proceso hijo ha finalizado con el código: ${code}`);
});