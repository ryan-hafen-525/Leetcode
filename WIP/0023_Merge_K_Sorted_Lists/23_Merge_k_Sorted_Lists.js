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
	constructor() {
		this.head = 0;
	}
}

var mergeKLists = function (lists) {
	let returnArray = [];
	let sortedLL;
	let cleanLists = [];

	for (let i = 0; i < lists.length; i++) {
		if (lists[i] !== null) {
			cleanLists.push(lists[i]);
		}
	}

	if (cleanLists.length === 0) {
		return [];
	}

	// Find minumum value
	let heap = new MinHeap(cleanLists);

	while (heap.root !== null) {
		sortedLL = new ListNode(heap.removeMin());
		returnArray.push(sortedLL);
		sortedLL = sortedLL.next;
	}

	// Remove the first node before returning
	returnArray.shift();
	return returnArray;
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
