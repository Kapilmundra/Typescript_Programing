function factorialOfNumber(givenNumber:number) {
    let result: number = 1
    while (givenNumber>1) {
        result = result * givenNumber;
        givenNumber--;
    }
    
    return result;
}

console.log(factorialOfNumber(5));