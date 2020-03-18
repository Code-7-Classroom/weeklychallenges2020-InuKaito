// HARD: Create 4 math functions, one called add() that adds 2 numbers,
// one called subtract() that subtracts 2 numbers
// one called multiply() to multiply 2 numbers
// and one called divide() to divide two numbers.
var num4 = 10;
var num5 = 6;
var num6 = 15;
var num7 = 86;

add(num5, num6);
function add(num5, num6) {
    console.log(num5 + ' plus ' + num6 + ' equals ' + (num5 + num6));
}

subtract(num7, num6);
function subtract(num7, num6) {
    console.log(num7 + ' minus ' + num6 + ' equals ' + (num7 - num6));
}

multiply(num4, num5);
function multiply(num4, num5) {
    console.log(num4 + ' multiply ' + num5 + ' equals ' + (num4 * num5));
}

divide(num7, num4);
function divide(num7, num4) {
    console.log(num7 + ' divided by ' + num4 + ' equals ' + (num7 / num4));
}