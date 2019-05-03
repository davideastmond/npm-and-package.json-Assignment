/* This assignment features doing a npm init 
and then doing an npm install chalk, which installed the chalk package. I then
experimented with the chalk API */
var chalk = require("chalk");

var message = "Hello" + chalk.yellow(" world!", chalk.blue(" wassup!"));
message += chalk.underline("This is underlined text \n");
message += chalk.blue.bgRed.bold("Big bold and beautiful!");

console.log(message);

