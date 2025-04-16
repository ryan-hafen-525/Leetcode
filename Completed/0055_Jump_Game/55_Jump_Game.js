var canJump = function (nums) {
	let maxReach = 0;

	for (let i = 0; i < nums.length; i++) {
		if (i > maxReach) {
			return false; // Can't reach this position
		}
		maxReach = Math.max(maxReach, i + nums[i]);
	}

	return true;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([2, 0])); // true
console.log(
	canJump([
		2, 0, 6, 9, 8, 4, 5, 0, 8, 9, 1, 2, 9, 6, 8, 8, 0, 6, 3, 1, 2, 2, 1, 2,
		6, 5, 3, 1, 2, 2, 6, 4, 2, 4, 3, 0, 0, 0, 3, 8, 2, 4, 0, 1, 2, 0, 1, 4,
		6, 5, 8, 0, 7, 9, 3, 4, 6, 6, 5, 8, 9, 3, 4, 3, 7, 0, 4, 9, 0, 9, 8, 4,
		3, 0, 7, 7, 1, 9, 1, 9, 4, 9, 0, 1, 9, 5, 7, 7, 1, 5, 8, 2, 8, 2, 6, 8,
		2, 2, 7, 5, 1, 7, 9, 6,
	])
); // true

// index = 0
// 2
// each time we jump forward
// base case:
// return true entirely = jumped at the end aka array  length is 1
// went too far =
