"use strict";
function cartesianProblem(arry1, arry2) {
    let cartesianArray = [];
    for (let index = 0; index < arry1.length; index++) {
        for (let j = 0; j < arry2.length; j++) {
            cartesianArray.push([arry1[index], arry2[j]]);
        }
    }
    return cartesianArray;
}
console.log(cartesianProblem([1, 3], [1, 3, 5, 7]));
