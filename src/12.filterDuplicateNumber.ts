let arr1: number[] = [1,2,2,4,4,5]

let filterArr = arr1.filter((ele, index, arr) => arr.indexOf(ele) !== index);
console.log(filterArr);