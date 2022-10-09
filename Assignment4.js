/*Write a program to find the area of a square and a rectangle using JavaScript objects with a common area function */
let square = {
  length: 10,
  breadth: 10,
  showArea: Area,
};
let rectangle = {
  length: 10,
  breadth: 5,
  showArea: Area,
};
function Area() {
  return this.length * this.breadth;
}
console.log(rectangle.showArea());
