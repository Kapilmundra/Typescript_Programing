"use strict";
function isPowerOfTwo(num) {
    if (num < 2) {
        return false;
    }
    let result = 2;
    while (result < num) {
        result = result * 2;
    }
    if (result == num) {
        return true;
    }
    else {
        return false;
    }
}
function isPowerOfTwo1(num) {
    if (num < 1) {
        return false;
    }
    while (num > 1) {
        let reminder = num % 2;
        if (reminder !== 0) {
            return false;
        }
        num = num / 2;
    }
    return true;
}
function isPowerOfTwo3(n) {
    if (n <= 0) {
        return false; // Negative numbers and zero are not powers of 2
    }
    // to check power bitwise of n and n-1 should be equal to zero
    // Check if there is exactly one set bit (binary representation has only one 1)
    return (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo1(6));
console.log(isPowerOfTwo1(2));
