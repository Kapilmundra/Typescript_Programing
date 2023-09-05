function bmiCalculator(weight: number, height: number) {
    let heightInMeter = (2.54 * 12 * height)/100;
    console.log(heightInMeter);
    let bmi = (weight/heightInMeter)/heightInMeter;

    if(bmi < 18) {
        console.log("Underweight ->  bmi is: " + bmi);
    }
    else if(bmi > 18 && bmi <= 24)  {
        console.log("Weigth is ok->  bmi is: " + bmi);
    }
    else {
        console.log("Overweight->  bmi is: " + bmi);
    }
    
}

bmiCalculator(60,5);