/* Write a JavaScript function to find the largest number in an array given as the parameter*/
GreatestNum = (nums) => {
  let greatest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > greatest) {
      greatest = nums[i];
    }
  }
  return greatest;
};

console.log(GreatestNum([-1, 30, 100, 200]));
