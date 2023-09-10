function celciusFehrenite(value: number, from: Temprature, to: Temprature) {
    let convert: number;
    if(to == 'fehrenhiet') {
        convert = value * 1.8 + 32;   // converting fehrenhiet
    }
    else {
        convert =  5/9 * (value - 32);
    }
    return convert    
}

enum Temprature {
    celecius = "celecius",
    fehrenhiet = "fehrenhiet"
}

console.log(celciusFehrenite(23, Temprature.celecius, Temprature.fehrenhiet));