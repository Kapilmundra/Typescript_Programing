"use strict";
// function findVowels(str1: string) {
//     let arr1 = ['a','e','i','o','u'];
//     let result  = new Map();
//     for (let index = 0; index < str1.length; index++) {
//         if(arr1.includes(str1[index].toLowerCase())) {
//             if(!result.has(str1[index])) {
//                 result.set(str1[index], index);
//             }
//         }   
//     }
//     return result;
// }
// console.log(findVowels("KapiliioU"));
function findVowels(str1) {
    let arr1 = ['a', 'e', 'i', 'o', 'u'];
    let result = [];
    for (let value of str1) {
        if (arr1.includes(value.toLowerCase())) {
            if (!result.includes(value)) {
                result.push(value);
            }
        }
    }
    return result;
}
console.log(findVowels("KapiliioU"));
