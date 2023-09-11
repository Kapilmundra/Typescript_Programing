"use strict";
// factorial
function factorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));
// fibnachi
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Example usage:
const position = 5;
const result = fibonacci(position);
console.log(`The Fibonacci number at position ${position} is ${result}`);
