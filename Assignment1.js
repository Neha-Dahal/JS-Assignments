/*Write a JavaScript function that accepts a number as a parameter and checks whether the number is positive or not*/
//using if else
function checkNum(num1) {
  if (num1 > 0) {
    return "Positive number";
  } else if (num1 < 0) {
    return "Negative number";
  } else {
    return "Zero";
  }
}
console.log(checkNum(-2));

//using ternary operator
function check(num2) {
  return num2 > 0 ? "Positive number" : num2 < 0 ? "Negative number" : "Zero";
}
console.log(check(-2));
