"use strict";
let aray1 = [1, 5, 7];
let aray2 = [2, 8, 9];
let byConcat = aray1.concat(aray2);
let bySpread = [...aray1, ...aray2];
console.log(byConcat);
console.log(bySpread);
