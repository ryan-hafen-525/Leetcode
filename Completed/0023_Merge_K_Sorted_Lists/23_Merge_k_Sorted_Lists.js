/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class Solution {
	constructor(lists) {
		this.lists = lists;
	}

	getMinValue() {
		// Gets the minimum value and removes it from lists
		let isEnd = false;
		let values = this.lists
			.map(node => node?.val)
			.filter(val => val != null);

		if (values.length === 0) {
			isEnd = true;
			return [null, isEnd];
		}

		let minimum = Math.min(...values);

		let index = this.lists.findIndex(node => node?.val === minimum);

		if (this.lists[index].next !== null) {
			this.lists[index] = this.lists[index].next;
		} else {
			this.lists[index] = null; 
		}

		return [minimum, isEnd];

	}
}

var mergeKLists = function (lists) {
	let linkedList = new ListNode(0);
	let head = linkedList;
	let solution = new Solution(lists);
	let isEnd = false;
	let value = null;

	while(!isEnd) {
		[value, isEnd] = solution.getMinValue(lists)
		if (value !== null) {
			linkedList.next = new ListNode(value)
			linkedList = linkedList.next;
		}
	}

	return head.next;

};

// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

// Helper function to convert an array into a linked list.
function arrayToList(arr) {
	if (!arr.length) return null;
	let head = new ListNode(arr[0]);
	let current = head;
	for (let i = 1; i < arr.length; i++) {
		current.next = new ListNode(arr[i]);
		current = current.next;
	}
	return head;
}

// Example test cases (each inner array simulates one linked list)
const testCases = [
	// Standard test case: multiple non-empty linked lists.
	[
		[1, 4, 5],
		[1, 3, 4],
		[2, 6],
	],
	[
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[1, 2, 3, 4, 5, 6, 7, 8, 90],
		[1, 13, 14, 15, 16, 17, 18],
		[13, 24, 35, 46, 57, 68],
	],
	// Test case with one empty list and two non-empty lists.
	[[], [1], [0]],
	// Test case where all lists are empty.
	[[], [], []],
	// Test case with a single non-empty list.
	// [[5, 10, 15]],
];

// Convert each array into a linked list before passing to mergeKLists.
const linkedListTestCases = testCases.map((testCase) =>
	testCase.map((arr) => arrayToList(arr))
);

// For demonstration, we print the first node of each test case.
linkedListTestCases.forEach((lists, idx) => {
	console.log(`Test case ${idx + 1}:`);
	console.log(mergeKLists(lists));
});
