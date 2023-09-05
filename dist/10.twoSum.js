"use strict";
// Given a an sorted array find first two sum that equal to target value
function twoSum(arr1, target) {
    let map1 = new Map();
    let indexOfLowerValueFromTarget = 0;
    for (let i = arr1.length - 1; i > 0; i--) {
        if (target > arr1[i]) {
            indexOfLowerValueFromTarget = i;
            break;
        }
    }
    for (let index = 0; index <= indexOfLowerValueFromTarget; index++) {
        for (let j = indexOfLowerValueFromTarget; j > index; j--) {
            if (target == arr1[index] + arr1[j]) {
                map1.set(index, arr1[index]);
                map1.set(j, arr1[j]);
                return map1;
            }
        }
    }
    return "Not find value";
}
console.log(twoSum([2, 5, 7, 11], 9));
function twoSum2(nums, target) {
    // Create a Map to store numbers and their indices
    const numMap = new Map();
    // Iterate through the input array 'nums'
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement of the current number with respect to the target
        const complement = target - nums[i];
        // Check if the complement is already in the 'numMap'
        if (numMap.has(complement)) {
            // If found, return the indices of the two numbers that add up to the target
            // The indices are retrieved from the 'numMap'
            return [numMap.get(complement), i];
        }
        // If the complement is not found, store the current number and its index in 'numMap'
        numMap.set(nums[i], i);
    }
    // If no solution is found, return an empty array (no indices)
    return [];
}
console.log(twoSum2([2, 5, 7, 11], 9));
