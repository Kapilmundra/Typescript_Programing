"use strict";
function charInString(str1) {
    let obj1 = {};
    for (let i = 0; i < str1.length; i++) {
        if (obj1.hasOwnProperty(str1[i])) {
            obj1[str1[i]] = obj1[str1[i]] + 1;
        }
        else {
            obj1[str1[i]] = 1;
        }
    }
    return obj1;
}
console.log(charInString("Kapill"));
