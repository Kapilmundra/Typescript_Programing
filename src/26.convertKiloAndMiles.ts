function KiloMiles(value: number, from: Distance, to: Distance) {
    let convert: number;
    let factor = 0.621371;
    if(to == 'Miles') {
        convert = value * factor;   // converting miles
    }
    else {
        convert =  value/factor;
    }
    return convert    
}

enum Distance {
    Kilo = "Kilo",
    Miles = "Miles"
}

console.log(KiloMiles(23, Distance.Kilo, Distance.Miles));