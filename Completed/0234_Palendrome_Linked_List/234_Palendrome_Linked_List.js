/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Inward-out method
var isPalindrome = function (head) {
	// Use tortise and hare to find middle
	let tortiseMark = head;
	let hareMark = head.next;
	let hasTrueMiddle;
	let previousMark = null;

	tortiseMark.prev = previousMark;

	while (hareMark != null) {
		// If hare equals tortise, then it's circular and not a palindrome
		if (hareMark === tortiseMark) {
			return false;
		}

		// Increase the tortise by one
		// Create link to previous node
		previousMark = tortiseMark;
		tortiseMark = tortiseMark.next;
		tortiseMark.prev = previousMark;

		// Increase the hare by two
		// If the hare is null, then break the loop
		try {
			hareMark = hareMark.next;
			hasTrueMiddle = false;
			hareMark = hareMark.next;
			hasTrueMiddle = true;
		} catch (e) {
			hareMark = null;
		}
	}

	// Initialize pointers to verify if palindrome or not
	let firstMarker, secondMarker;

	if (hasTrueMiddle) {
		firstMarker = tortiseMark.prev;
		secondMarker = tortiseMark.next;
	} else {
		firstMarker = tortiseMark.prev;
		secondMarker = tortiseMark;
	}

	// Loop checks if there is a palindrome or not
	while (firstMarker != null) {
		if (secondMarker === null) {
			return false;
		}

		if (firstMarker.val != secondMarker.val) {
			return false;
		}

		firstMarker = firstMarker.prev;
		secondMarker = secondMarker.next;
	}

	// If the algorithm gets this far, then it's a palindrome
	return true;
};

// Array-based method
// var isPalindrome = function (head) {
// 	// Use tortise and hare to find middle
// 	let tortiseMark = head;
// 	let hareMark = head.next;
// 	let hasTrueMiddle;
// 	let trackerArray = [];

// 	while (hareMark != null) {
// 		// If hare equals tortise, then it's circular and not a palindrome
// 		if (hareMark === tortiseMark) {
// 			return false;
// 		}

// 		// Add the node value to our first tracker array
// 		trackerArray.push(tortiseMark.val);

// 		// Increase the tortise by one
// 		tortiseMark = tortiseMark.next;

// 		// Increase the hare by two
// 		// If the hare is null, then break the loop
// 		try {
// 			hareMark = hareMark.next;
// 			hasTrueMiddle = false;
// 			hareMark = hareMark.next;
// 			hasTrueMiddle = true;
// 		} catch (e) {
// 			hareMark = null;
// 		}
// 	}

// 	// If there is a middle value, it's irrelevant and we
// 	// need to skip it to check for a palindrome
// 	if (hasTrueMiddle) {
// 		tortiseMark = tortiseMark.next;
// 	}

//     // Reverse our array to match the second half of palindrome
// 	trackerArray = trackerArray.reverse();
// 	let i = 0;

// 	while (tortiseMark != null) {
// 		if (trackerArray[i] != tortiseMark.val) {
// 			return false;
// 		}
// 		tortiseMark = tortiseMark.next;
// 		i++;
// 	}

//     // If we've made it here, then it must be a palindrome
// 	return true;
// };

const testCases = [
	[1, 2, 3, 2, 1], // true
	[1, 2, 2, 1], // true
	[1, 2], // false
	[1, 2, 4, 2, 2], // false
	[4, 5, 7, 5, 7, 5, 4], // true
];

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

let testCase;
let testList;
let head;

for (let i = 0; i < testCases.length; i++) {
	testCase = testCases[i];
	testList = new ListNode(testCase[0]);
	head = testList;

	for (let j = 1; j < testCase.length; j++) {
		testList.next = new ListNode(testCase[j]);
		testList = testList.next;
	}

	console.log(isPalindrome(head));
}
