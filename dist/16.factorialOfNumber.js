"use strict";
function factorialOfNumber(givenNumber) {
    let result = 1;
    while (givenNumber > 1) {
        result = result * givenNumber;
        givenNumber--;
    }
    return result;
}
console.log(factorialOfNumber(5));
