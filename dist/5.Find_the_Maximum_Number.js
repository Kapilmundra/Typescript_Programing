"use strict";
function findMaxNumber(arrayofnum) {
    if (arrayofnum.length === 0) {
        throw new Error("Array is empty.");
    }
    let maxNumber = arrayofnum[0];
    for (let index = 0; index < arrayofnum.length; index++) {
        if (maxNumber < arrayofnum[index]) {
            maxNumber = arrayofnum[index];
        }
    }
    return maxNumber;
}
function findMaxNumber1(arrayofnum) {
    return arrayofnum.reduce((a, b) => a > b ? a : b);
}
console.log(findMaxNumber([1, 2, 5, 4, 8]));
console.log(findMaxNumber1([1, 2, 5, 4, 8]));
