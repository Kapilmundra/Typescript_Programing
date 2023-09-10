function findNumberIsPrime(num: number) {
    if(num <= 1) {
        return "Number should be greater then 1";
    }

    for (let index = 2; index < num; index++) {
        if(num%index==0) {
            return `Number ${num} is not prime`;
        }
    }

    return `Number ${num} is prime`;
}

console.log(findNumberIsPrime(7));