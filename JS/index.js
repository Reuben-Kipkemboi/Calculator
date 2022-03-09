// let add = function(number1, number2) {
//     return number1 + number2;
//   };
//   let number1 = prompt("Enter First number:");
//   let number2 = prompt("Enter Second number:");
//   alert(add(number1, number2));

// Calculations done by the following.
  let add = function(number1, number2) {
    return number1 + number2;
  };
  let subtract = function(number1, number2) {
    return number1 - number2;
  };
  let multiply = function(number1, number2) {
    return number1 * number2;
  };
  let divide = function(number1, number2) {
    return number1 / number2;
  };

// gathering user input
$(document).ready(function(){
  let number1 = prompt("Enter First number:");
  let number2 = prompt("Enter Second number:");
   alert(add(number1, number2));

});