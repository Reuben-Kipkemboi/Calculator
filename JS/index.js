// let add = function(number1, number2) {
//     return number1 + number2;
//   };
//   let number1 = prompt("Enter First number:");
//   let number2 = prompt("Enter Second number:");
//   alert(add(number1, number2));

// Calculations done by the following.# backend logic
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

  
// front-end logic
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
  let number1 = parseInt($("#add1").val());
  let number2 = parseInt($("#add2").val());

  let addResult = add(number1, number2);
$("#output").text(addResult);
  });

  // subraction
  $("form#subtract").submit(function(event) {
    event.preventDefault();
  let number1 = parseInt($("#subtract1").val());
  let number2 = parseInt($("#subtract2").val());

  let subtractResult = subtract(number1, number2);
$("#output").text(subtractResult);
  });
});