"use strict";
function KiloMiles(value, from, to) {
    let convert;
    let factor = 0.621371;
    if (to == 'Miles') {
        convert = value * factor; // converting miles
    }
    else {
        convert = value / factor;
    }
    return convert;
}
var Distance;
(function (Distance) {
    Distance["Kilo"] = "Kilo";
    Distance["Miles"] = "Miles";
})(Distance || (Distance = {}));
console.log(KiloMiles(23, Distance.Kilo, Distance.Miles));
