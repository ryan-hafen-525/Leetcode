var canJump = function (nums) {
  // Base case
  if (nums.length === 1) {
    return true;
  }

  let result;
  let i = 1;

  while (i <= nums[0] && nums[0] !== 0) {
    result = canJump(nums.slice(i, nums.length));
    if (result) {
      return true;
    } else {
      i++;
    }
  }

  return false;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([2, 0])); // true
console.log(canJump([2, 0, 0])); // true



// index = 0
// 2
// each time we jump forward
// base case: 
// return true entirely = jumped at the end aka array  length is 1
// went too far = 
