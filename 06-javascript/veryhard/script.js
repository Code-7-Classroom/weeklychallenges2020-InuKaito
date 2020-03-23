// Create a simple calculator that prompts the user for a number,
// an operator (either +, -, * or /) and another number,
// and then uses the functions created in the hard challenge to output the value in sentence form.
// Example output: "3 + 4 = 7"
var a = parseInt(prompt('enter your first number'));
var b = prompt('enter your operator like +,-,*,/');
var c = parseInt(prompt('enter your second number'));
switch (b) {
 case ('+'):
 b=a+c;
 alert('your answer is : ' + b);
 break;

 case ('-'):
 b=a-c;
 alert('your answer is : '+b);
 break;

 case ('*'):
 b=a*c;
 alert('your answer is : '+b);
 break;   

 case ('/'):
 b=a/c;
 alert('your answer is : '+b);
 break;

 default:
 alert('you enter incorrect symbol');
}