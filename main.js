const sha256 = require('sha256');
const readline = require('readline');

// TODO: save password to data, require login if there is saved_password, compare sha256 data to verify login
// organize all code in func + add init function

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('enter your password: ', (ans) => {
    console.log("The password SHA256 is: -> " + sha256(ans));
    r1.close();
});
