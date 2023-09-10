"use strict";
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numbers.filter((ele, index, arr) => arr.indexOf(ele) === index);
const uniqueNumbers2 = numbers.filter((ele, index, arr) => arr.indexOf(ele) === arr.lastIndexOf(ele));
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
console.log(uniqueNumbers2); // Output: [1, 3, 5]
