"use strict";
function calculateWeigth({ foot, incheas = 0 }) {
    let heightInMeter = ((2.54 * 12 * foot) + (2.54 * incheas)) / 100;
    let weight = {};
    for (let bmi = 19; bmi < 25; bmi++) {
        let weight1 = (bmi * heightInMeter * heightInMeter);
        weight[bmi] = weight1;
    }
    return weight;
}
console.log(calculateWeigth({ foot: 5, incheas: 6 }));
