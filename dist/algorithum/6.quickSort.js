"use strict";
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let arr1 = [];
    let arr2 = [];
    for (let index = 0; index < arr.length - 1; index++) {
        if (arr[index] <= pivot) {
            arr1.push(arr[index]);
        }
        else if (arr[index] > pivot) {
            arr2.push(arr[index]);
        }
    }
    return [...quickSort(arr1), pivot, ...quickSort(arr2)];
}
console.log(quickSort([1, -1, 3, -1]));
console.log(quickSort([0, 0, 0, 1, 1, 1, 0]));
