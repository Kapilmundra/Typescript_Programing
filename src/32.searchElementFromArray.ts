function searchElement(value: number, arr1: number[]) {
    let i=0;
    while (i < arr1.length) {
        if(arr1[i] == value) {
            return "Number exist";
        }
        i++;
    }
    return 'Number not exist';
}

function searchElement1(value: number, arr1: number[]) {
    if(arr1.includes(value)) {
        return "Number exist";
    }
    return 'Number not exist';
}

console.log(searchElement(5, [1,3,5,7,5]));
console.log(searchElement1(5, [1,3,5,7,5]));