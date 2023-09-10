function findFactor(num:number) {
    let factor = []
    for (let index = 1; index <= num; index++) {
        if(num%index==0) {
            factor.push(index);
        }
    }
    return factor;
}

console.log(findFactor(12));