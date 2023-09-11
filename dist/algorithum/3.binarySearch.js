"use strict";
function binarySearchElement(target, arry) {
    let startIndex = 0;
    let endIndex = arry.length - 1;
    let midIndex = Math.floor((endIndex) / 2);
    if (arry.length == 0 || target < arry[startIndex] || target > arry[endIndex]) {
        return -1;
    }
    else if (target == arry[midIndex]) {
        return midIndex;
    }
    else if (target < arry[midIndex]) {
        while (startIndex < midIndex) {
            if (target == arry[startIndex]) {
                return startIndex;
            }
            startIndex++;
        }
    }
    else if (target > arry[midIndex]) {
        while (endIndex > midIndex) {
            if (target == arry[endIndex]) {
                return endIndex;
            }
            endIndex--;
        }
    }
    else {
        return -1;
    }
}
function binarySearchElement1(target, arry) {
    let startIndex = 0;
    let endIndex = arry.length - 1;
    if (arry.length == 0 || target < arry[startIndex] || target > arry[endIndex]) {
        return -1;
    }
    while (startIndex < endIndex) {
        let midIndex = Math.floor((startIndex + endIndex) / 2);
        if (target == arry[midIndex]) {
            return midIndex;
        }
        else if (target > arry[midIndex]) {
            startIndex = midIndex + 1;
        }
        else if (target < arry[midIndex]) {
            endIndex = midIndex;
        }
    }
    return -1;
}
console.log(binarySearchElement(11, [1, 3, 5, 7, 9]));
console.log(binarySearchElement(7, [1, 3, 5, 7, 9]));
console.log(binarySearchElement1(11, [1, 3, 5, 7, 9]));
console.log(binarySearchElement1(7, [1, 3, 5, 7, 9]));
