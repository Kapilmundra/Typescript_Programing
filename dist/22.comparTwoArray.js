"use strict";
let arry1 = [1, 5, 9, 7];
let arry2 = [1, 7, 5, 9];
function compareTwoArray(arry1, arry2) {
    let comparisen = true;
    if (arry1.length != arry2.length) {
        comparisen = false;
    }
    arry1.forEach((value) => {
        if (!arry2.includes(value)) {
            comparisen = false;
        }
    });
    return console.log(comparisen);
}
compareTwoArray(arry1, arry2);
