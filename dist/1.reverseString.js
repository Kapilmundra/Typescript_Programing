"use strict";
// Method 1
const args = process.argv;
// The first two elements of args are typically the Node.js executable path and the script file path
// The actual command-line arguments start from index 2
const commandLineArguments = args.slice(2);
let str1 = commandLineArguments[0];
let str2 = "";
for (let i = str1.length - 1; i >= 0; i--) {
    str2 = str2 + str1[i];
}
console.log(str2);
// Method 2
let str4 = "";
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question(`Pass string:`, (str3) => {
    str4 = str3;
    readline.close();
});
console.log(str4);
console.log(str4.split("").reverse().join(""));
