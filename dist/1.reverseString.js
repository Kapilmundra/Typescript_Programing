"use strict";
// Method 1
let str1 = "Hello World";
let str2 = "";
for (let i = str1.length - 1; i >= 0; i--) {
    str2 = str2 + str1[i];
}
console.log(str2);
// Method 2
let str3 = "Hello world";
console.log(str3.split("").reverse().join(""));
