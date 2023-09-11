function linearSearchElement(target: number, arry: number[]) {
    for (let index = 0; index < arry.length; index++) {
        if(target == arry[index]) {
            return index;
        }
    }
    return -1;
}

console.log(linearSearchElement(11, [1,3,5,7,9]));