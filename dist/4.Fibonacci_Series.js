"use strict";
function FibonacciSeries(num) {
    let arr1 = [0, 1];
    for (let index = 2; index < num; index++) {
        arr1.push(arr1[index - 2] + arr1[index - 1]);
    }
    return arr1;
}
console.log(FibonacciSeries(5));
