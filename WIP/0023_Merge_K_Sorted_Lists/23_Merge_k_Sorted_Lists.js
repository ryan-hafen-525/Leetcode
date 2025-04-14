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

class MinHeap {
	constructor(lists) {
		this.root = lists[0].val
		this.array = lists;
		this.trinkleDownHeap();
	}

	removeMin() {
		let returnVal = this.root;

		// Iterate through array until value is found
		// If the whole array is empty, then you've reached the end and can return the root
		let foundList = false;
		let lastLinkedList;

		while (!foundList) {
			if (this.array.length === 0) {
				this.root = null;
				return returnVal;
			} else if (this.array.at(-1).val !== null) {
				foundList = true;
				lastLinkedList = this.array.at(-1);
			} else {
				this.array.pop()
			}
		}

		// Get last value of linked list
		// NEEDSWORK: need to remove the last item of the linked list
		let secLast = lastLinkedList;

		while (lastLinkedList.next !== null) {
			secLast = lastLinkedList;
			lastLinkedList = lastLinkedList.next;
		}

		this.root = lastLinkedList.val;
		secLast.next = null;
		lastLinkedList.val = null;

		this.trinkleDownHeap();

		return returnVal;
	}

	trinkleDownHeap() {
		let min = this.root;
		let minIndex = 0;

		// First, find minimum value in array
		for (let i = 0; i < this.array.length; i++) {
			if (this.array[i].val < min && this.array[i].val !== null) {
				min = this.array[i].val;
				minIndex = i;
			}
		}

		// Next, substitue minimum value for root
		let oldRoot = this.root;

		if (oldRoot > min) {
			this.root = min;
			this.array[minIndex].val = oldRoot;
		}

		// Finally, traverse LL until old root is in proper place.
		let balanced = false;
		let tempVal;
		let currentLL = this.array[minIndex];

		while (!balanced) {
			if (currentLL.next === null) {
				balanced = true;
			} else if (currentLL.val > currentLL.next.val) {
				tempVal = currentLL.val;
				currentLL.val = currentLL.next.val;
				currentLL.next.val = tempVal;
				currentLL = currentLL.next;
			} else {
				balanced = true;
			}
		}
	}
}

var mergeKLists = function (lists) {
	let returnArray = [];
	let sortedLL;
	let cleanLists = [];

	for (let i = 0; i < lists.length; i++) {
		if (lists[i] !== null) {
			cleanLists.push(lists[i])
		}
	}

	if (cleanLists.length === 0) {
		return [];
	}

	// Find minumum value
	let heap = new MinHeap(cleanLists);

	while (heap.root !== null) {
		sortedLL = new ListNode(heap.removeMin());
		returnArray.push(sortedLL)
		sortedLL = sortedLL.next;
	}

	// Remove the first node before returning
	returnArray.shift()
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
[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,90],[1,13,14,15,16,17,18],[13,24,35,46,57,68]],
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
