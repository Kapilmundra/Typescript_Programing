"use strict";
function findUnion(arry1, arry2) {
    let union = [...arry1, ...arry2];
    let removeDuplicates = union.filter((ele, index, arry) => arry.indexOf(ele) == index);
    return removeDuplicates;
}
console.log(findUnion([2, 5, 3, 7, 2], [5, 2, 9, 0, 1]));
