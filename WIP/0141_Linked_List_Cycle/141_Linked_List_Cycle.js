/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var hasCycle = function(head) {
    let nodeMap = new Map();
    let currentNode = head;

    while(currentNode) {
        if (!nodeMap.has(currentNode)) {
            nodeMap.set(currentNode);
        } else {
            return true;
        }

        currentNode = head.next;
    }

    return false;
};

let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = list;

let list2 = new ListNode(1);
list2.next = new ListNode(2);
list2.next.next = new ListNode(3);

console.log(hasCycle(list)); // true
console.log(hasCycle(list2)); // false