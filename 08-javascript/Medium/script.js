//  function dividing the slices of pizza to people 
 function cutPizzaSlices (slices) {
    return function(people) {
    return "Each person gets " + (slices / people).toFixed(2) + " slices of pizza";
    }
}
// Number of slices in the pizza
var sharePizza = cutPizzaSlices(8);
  // Number of people 
console.log(sharePizza(2));                                                                                                                                                                    
  // prints "Each person gets 4.00 slices of pizza"

  // Number of people
console.log(sharePizza(3)); 
  // prints "Each person gets 2.67 slices of pizza"
