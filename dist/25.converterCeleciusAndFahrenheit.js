"use strict";
function celciusFehrenite(value, from, to) {
    let convert;
    if (to == 'fehrenhiet') {
        convert = value * 1.8 + 32; // converting fehrenhiet
    }
    else {
        convert = 5 / 9 * (value - 32);
    }
    return convert;
}
var Temprature;
(function (Temprature) {
    Temprature["celecius"] = "celecius";
    Temprature["fehrenhiet"] = "fehrenhiet";
})(Temprature || (Temprature = {}));
console.log(celciusFehrenite(23, Temprature.celecius, Temprature.fehrenhiet));
