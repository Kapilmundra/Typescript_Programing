function sumArrayElement(arr1: number[]) {
    return arr1.reduce((a, b) => a+b);
}

console.log(sumArrayElement([1,3,5,6]));