const { execFile } = require("child_process");

execFile(__dirname + "/processNodejsLogo.sh", {"shell":"powershell.exe"}, (error, stdout, stderr) => {
    if (error) {
        console.error(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
    }
    console.log(`stdout:\n${stdout}`);
})