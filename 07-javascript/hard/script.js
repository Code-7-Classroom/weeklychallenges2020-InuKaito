function bmi ( mass,height ) {
    return mass / (height * height)
}
var tomMass = 8 * 453.59237; //lbs 1lb equals 453.59237 g
var tomHeight = 9 * 2.54; //in 1in equals 2.54cm

var jerryMass = 45; //grams
var jerryHeight = 10; //10cm

var tomBmi = bmi ( tomMass , tomHeight);
var jerryBmi = bmi( jerryMass , jerryHeight);



console.log(jerryBmi , tomBmi);


if (jerryBmi > tomBmi){
    var greaterBmi = jerryBmi > tomBmi;
    console.log ("Is Jerry’s BMI higher than Tom’s? " + greaterBmi );

}
else (tomBmi > jerryBmi )  
    var greaterBmi = tomBmi > jerryBmi;
    console.log ("Is Tom’s BMI higher than Jerry’s? " + greaterBmi );
