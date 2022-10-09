/* Write a program to find the area of a cylinder using JavaScript objects(radius, height and the area function should be in the object).*/
const pi = 3.14;
let area = {
  radius: 2,
  height: 5,
  showArea: function () {
    return pi * area.radius ** 2 * area.height;
  },
};
console.log(area.showArea());
