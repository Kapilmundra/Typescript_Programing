"use strict";
function firstLetterCapital(str1) {
    let arr1 = str1.split(' ');
    let arr2 = [];
    for (let ele of arr1) {
        let arr3 = ele.split("");
        arr3[0] = arr3[0].toUpperCase();
        arr2.push(arr3.join(""));
    }
    return arr2.join(" ");
}
function firstLetterCapital1(str1) {
    let arr1 = str1.split(' ');
    let arr2 = arr1.map((value) => {
        return value[0].toUpperCase() + value.slice(1);
    });
    return arr2.join(" ");
}
function firstLetterCapital2(str1) {
    let arr1 = str1.split(' ');
    let arr2 = arr1.filter((value) => {
        return value[0].toUpperCase() + value.slice(1); // it's meant for filtering elements based on a condition and not for modifying the elements themselves
    });
    return arr2.join(" ");
}
console.log(firstLetterCapital1("kapil mundra"));
