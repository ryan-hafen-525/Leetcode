# Leetcode Portfolio

A collection of LeetCode problems I've worked on with explanations and reasoning behind them. (All made without AI ;))

- [Leetcode Portfolio](#leetcode-portfolio)
- [Problems](#problems)
  - [6: Zigzag Conversion](#6-zigzag-conversion)
    - [Description](#description)
    - [Code](#code)
    - [Explanation](#explanation)
  - [9: Palindrome Number](#9-palindrome-number)
    - [Description](#description-1)
    - [Code](#code-1)
    - [Explanation](#explanation-1)
  - [13: Roman to Integer](#13-roman-to-integer)
    - [Description](#description-2)
    - [Code](#code-2)
    - [Explanation](#explanation-2)
  - [14: Longest Prefix](#14-longest-prefix)
    - [Description](#description-3)
    - [Code](#code-3)
    - [Explanation](#explanation-3)
  - [23: Merge k Sorted Lists](#23-merge-k-sorted-lists)
    - [Description](#description-4)
    - [Code](#code-4)
    - [Explanation](#explanation-4)
  - [55: Jump Game](#55-jump-game)
    - [Description](#description-5)
    - [Code](#code-5)
    - [Explanation](#explanation-5)
  - [100: Same Tree](#100-same-tree)
    - [Definition](#definition)
    - [Code](#code-6)
    - [Explanation](#explanation-6)
  - [101: Symmetric Tree](#101-symmetric-tree)
    - [Description](#description-6)
    - [Code](#code-7)
    - [Explanation](#explanation-7)
  - [141: Linked List Cycle](#141-linked-list-cycle)
    - [Description](#description-7)
    - [Code](#code-8)
    - [Explanation](#explanation-8)
  - [207: Course Planner](#207-course-planner)
    - [Description](#description-8)
    - [Code](#code-9)
    - [Explanation](#explanation-9)
  - [215: kth Largest Element](#215-kth-largest-element)
    - [Description](#description-9)
    - [Code](#code-10)
    - [Explanation](#explanation-10)
  - [234: Palindrome Linked List](#234-palindrome-linked-list)
    - [Description](#description-10)
    - [Code](#code-11)
    - [Explanation](#explanation-11)
  - [241: Different Ways to Add Parenthesis](#241-different-ways-to-add-parenthesis)
    - [Description](#description-11)
    - [Code](#code-12)
    - [Explanation](#explanation-12)
  - [329: Longest Increasing Path Matrix](#329-longest-increasing-path-matrix)
    - [Description](#description-12)
    - [Code](#code-13)
    - [Explanation](#explanation-13)
  - [1032: Stream of Characters](#1032-stream-of-characters)
    - [Description](#description-13)
    - [Code](#code-14)
    - [Explanation](#explanation-14)

# Problems

## 6: Zigzag Conversion

> [!NOTE]
> -   Difficulty: **Medium**
> -   Language: **JavaScript**
> -   Time Complexity: **O(N * M)**
>     - *M being the number of rows*
> -   Space Complexity: **O(N * M)**
>     - *M being the number of rows*

### Description
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P-------A-------H-------N

A---P---L---S---I---I---G

Y-------I-------R

And then read line by line: "PAHNAPLSIIGYIR"

### Code

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	let matrix = [];
	let row = 0;
	let column = 0;
	let goingUp = true;

	for (let i = 0; i < numRows; i++) {
		matrix.push([]);
	}

	for (let i = 0; i < s.length; i++) {
		matrix[row][column] = s[i];

		// Counter mechanism
		if (numRows === 1) {
			column++;
		} else if (goingUp) {
			if (row === numRows - 2) {
				goingUp = false;
			}
			row++;
		} else {
			row--;
			column++;
			if (row <= 0) {
				goingUp = true;
			}
		}
	}

	let newWord = "";

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] !== undefined) {
				newWord += matrix[i][j];
			}
		}
	}

	return newWord;
};
```

### Explanation
The zig-zag algorithm is also a cipher I've seen in the cybersecurity world. My algorithm initialized a 2D matrix of how the output is painted in the description. The algorithm has mechanism that figures out where in the matrix each letter should go and leave the rest of the empty slots as undefined. It then iterates through the algorithm once more, this time in the order of the 2D matrix being read right to left, up to down as if it was reading text and adds the output to a variable `newWord` that is returned.

## 9: Palindrome Number

> [!NOTE]
>
> -   Difficulty: **Easy**
> -   Language: **Javascript**
> -   Time Complexity: **O(N)**
> -   Space Complexity: **O(N)**

### Description

Given an integer x, return true if x is a palindrome, and false otherwise.

### Code

```javascript
// Time complexity = O(N)
var isPalindrome = function (x) {
	let temp = String(x).split("").reverse().join("");
	return parseInt(temp) === x;
};
```

### Explanation
This is one of my shorest-written algorithms, yet it still has an `O(N)` complexity. The algorithm works  by taking the string and turning it into an array. The built-in `reverse()` function then reverses the array, and the `join()` function puts the array back into a string. I then compare if the reversed string is the same as the original. If it is, then it's a palindrome.


## 13: Roman to Integer

> [!NOTE]
>
> -   Difficulty: **Easy**
> -   Language: **Javascript**
> -   Time Complexity: **O(N)**
> -   Space Complexity: **O(1)**

### Description

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol Value
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.

X can be placed before L (50) and C (100) to make 40 and 90.

C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

### Code

```javascript
const numerals = {
	M: 1000,
	D: 500,
	C: 100,
	L: 50,
	X: 10,
	V: 5,
	I: 1,
};

function calculateValue(currentChar, nextChar, index) {
	let value = 0;
	if (numerals[currentChar] < numerals[nextChar]) {
		index += 1;
		value = numerals[nextChar] - numerals[currentChar];
		return [value, index];
	} else {
		value = numerals[currentChar];
		return [value, index];
	}
}

var romanToInt = function (s) {
	let total = 0;
	let add = 0;

	for (let index = 0; index < s.length; index++) {
		char = s[index];
		nextChar = s[index + 1];
		[add, index] = calculateValue(char, nextChar, index);
		total += add;
	}

	return total;
};
```

### Explanation
This algorithm iterates through all of the characters in the roman numeral string. It gets the current and next character to make sure that it's not subtracting instead of adding becuase the character before a numeral could either add or subtract. It uses a hash table called `numerals` for fast lookup for each of the characters. The algorithm iteratively adds all the characters and returns the result as `total`. 

## 14: Longest Prefix

> [!NOTE]
>
> -   Difficulty: **Easy**
> -   Language: **Python**
> -   Time Complexity: **O(N * M)**
>     - *N is the length of the array*
>     - *M is the length of the shortest word*
> -   Space Complexity: **O(M)**
>     - *M is the length of the shortest word*

### Description

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

### Code

```python
class Solution(object):

    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        prefix = ""
        char = ""
        word = 0
        letter_pos = 0

        while True:
            try:
                while word < len(strs):
                    if char == "":
                        char += strs[word][letter_pos]
                    else:
                        if char != strs[word][letter_pos]:
                            return prefix
                    word += 1

                prefix += char
                char = ""
                letter_pos += 1
                word = 0
            except:
                return prefix
```

### Explanation
This algorithm iterates through the first character. If all the first character is the same, then it goes to the next until one word doesn't match. The algorithm returns the last correct prefix where all the words matched.

## 23: Merge k Sorted Lists

> [!NOTE]
>
> -   Difficulty: **Hard**
> -   Language: **Javascript**
> -   Time Complexity: **O(N)**
>     - *N is the total amount of nodes*
> -   Space Complexity: **O(N + M)**
>     - *M is the number of inputed linked lists*

### Description
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

### Code
```javascript
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
```

### Explanation
Initially, I wanted to use a priority queue for this problem; however, the linked lists made it slightly difficult to impliment, so it's more of a custom algorithm that behaves similarly to a priority queue. 

The algorithm starts by creating a dummy head marker that keeps track of the beginning. It then goes through and compares the values of each of the linked lists and finds the minimum. When the minimum is found, it goes to the next value. This is repeated continually until all the linked lists have reached their end. The varialbe `isEnd` signals that the linked lists are depleted, and the dummy from the head marker is removed; thus, returning one singly, sorted linked list.

## 55: Jump Game

> [!NOTE]
>
> -   Difficulty: **Medium**
> -   Language: **Javascript**
> -   Time Complexity: **O(N)**
> -   Space Complexity: **O(1)**

### Description

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

### Code

```javascript
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
```

### Explanation
This algorithm works not by calculating each path of reaching the end, but rather by going to each value in the array (except for the end) and seeing if the position plus the value of that position is enough to continue on. If the array gets to a point where the position is greater than the furthest any of the values could reach, then it must be a dead end and the algorithm outputs false. 

## 100: Same Tree

> [!NOTE]
>
> -   Difficulty: **Easy**
> -   Language: **Python**
> -   Time Complexity: **O(N)**
> -   Space Complexity: **O(log N)**

### Definition
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

### Code
```python
class Solution(object):
    def isSameTree(self, p, q):
        """
        :type p: Optional[TreeNode]
        :type q: Optional[TreeNode]
        :rtype: bool
        """
        # Breadth-first traversal
        p_q = []
        q_q = []

        p_q.append(p)
        q_q.append(q)

        while(p_q or q_q):

            p_node = p_q.pop()
            q_node = q_q.pop()

            if p_node != None and q_node != None:
                if p_node.val != q_node.val:
                    return False
                
                p_q.append(p_node.left)
                p_q.append(p_node.right)

                q_q.append(q_node.left)
                q_q.append(q_node.right)

            elif p_node == None and q_node != None:
                return False
            elif p_node != None and q_node == None:
                return False

        return True
```

### Explanation
This algorithm uses bread-first traversal across two binary trees at the same time. In order to keep track of positions in the tree, it uses the value `None` as a filler so that the two queues for each tree are synced together. As soon as the values of the two nodes don't match, `False` is returned. If the algorithm happens to iterate past every value in the trees, then they must match and the algorithm returns `True`.

## 101: Symmetric Tree

> [!NOTE]
>
> -   Difficulty: **Easy**
> -   Language: **Javascript**
> -   Time Complexity: **O(N)**
> -   Space Complexity: **O(N)**

### Description

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

### Code

```python
class Solution:
    """ Solution Class """
    def isSymmetric(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: bool
        """
        if not root:
            return True
        def is_mirror_tree(p, q):
            if p is None and q is None:
                return True

            if p is None or q is None:
                return False

            if p.val != q.val:
                return False

            return is_mirror_tree(p.left, q.right) and is_mirror_tree(q.left, p.right)

        return is_mirror_tree(root.left, root.right)

```

### Explanation
This algorithm uses recursion to check if the tree is symmetric. The function is called for each two mirroring nodes and compares whether the nodes are the same or not.  Each time the function is called is one more element added onto the call stack which is why if we were to get a degenerate tree, the space complexity would be `O(N)`.

## 141: Linked List Cycle

> [!NOTE]
>
> -   Difficulty: **Easy**
> -   Language: **Javascript**
> -   Time Complexity: **O(N)**
> -   Space Complexity: **O(N)**

### Description
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

### Code
```javascript
var hasCycle = function(head) {
    let nodeMap = new Map();
    let currentNode = head;

    while(currentNode) {
        if (!nodeMap.has(currentNode)) {
            nodeMap.set(currentNode, true);
        } else {
            return true;
        }

        currentNode = currentNode.next;
    }

    return false;
};
```

### Explanation
This algorithm uses a hash map to track if a node has been visited or not. The algorithm goes through each node element and looks up if it's in the visited hash table. If it is found, then the algorithm exits early and returns that there is a cycle in the linked list. 

## 207: Course Planner

> [!NOTE]
>
> -   Difficulty: **Medium**
> -   Language: **Python**
> -   Time Complexity: **O(V + E)**
> -   Space Complexity: **O(V + E)**

### Description
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

### Code
```python
class Solution:
    # Creates a adjacent vertices list for each class
    def init_adj(self, n: int, prereq: list[list[int]]):
        adj: list[list[int]] = [[] for _ in range(n)]

        for u, v in prereq:
            adj[u].append(v)

        return adj
    
    # Depth-first search for cycle detection
    def is_cycle_rec(self, adj: list[list[int]], u: int, visited: list[bool], rec_stack: list[bool]):
        # If the node is already in the current recursion stack, a cycle is detected
        if rec_stack[u]:
            return True
        
        # If the node is already visited and not part of the recursion stack, skip it
        if visited[u]:
            return False
        
        # Mark the current node as visited and add it to the recursion stack
        visited[u] = True
        rec_stack[u] = True

        # Recursion for all the adjacent verticies
        for v in adj[u]:
            if self.is_cycle_rec(adj, v, visited, rec_stack):
                return True
            
        # Remove from stack before returning
        rec_stack[u] = False
        return False

    
    def canFinish(self, numCourses: int, prerequisites: list[list[int]]) -> bool:
        adj: list[list[int]] = self.init_adj(numCourses, prerequisites)

        visited: list[bool] = [False] * numCourses
        rec_stack: list[bool] = [False] * numCourses

        for i in range(numCourses):
            if not visited[i] and self.is_cycle_rec(adj, i, visited, rec_stack):
                return False

        return True

```

### Explanation
This algorithm was one of the more complex algorithms I made. It starts by creating graph with adjacent vertices represented by lists. There are two more lists: one acts as a registry of which nodes were visited, and the other acts as a stack. 

The algorithm iterates through each course and performs a depth-first traversal using recursion while markig on the registry which nodes were visited. After it reaches an end, it starts backtracking. If it gets to a node where it happens to already be on the stack, then a cycle is deteced and it would be impossible to take those classes. 

## 215: kth Largest Element

> [!NOTE]
>
> -   Difficulty: **Medium**
> -   Language: **Javascript**
> -   Time Complexity: **O(N)**
> -   Space Complexity: **O(N)**

### Description
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

### Code
```javascript
  function floydRivestSelect(nums, left, right, k) {
    const LN2_3 = 2 / 3;

    while (right > left) {
  
        // Reduces nums if large
        if (right - left > 600) {
            const n  = right - left + 1;
            const i  = k   - left + 1;
            const z  = Math.log(n);
            const s  = 0.5 * Math.exp(LN2_3 * z);
            const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * Math.sign(i - n / 2);

            const newLeft  = Math.max(left, Math.floor(k - (i * s) / n + sd));
            const newRight = Math.min(right, Math.floor(k + ((n - i) * s) / n + sd));

            floydRivestSelect(nums, newLeft, newRight, k);  
        }

        const t = nums[k];
        let i = left
        let j = right;

        [nums[left], nums[k]] = [nums[k], nums[left]];

        if (nums[right] > t) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
        }

        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            ++i; --j;

            while (nums[i] < t) ++i;
            while (nums[j] > t) --j;
        }

        if (nums[left] === t) {
            [nums[left], nums[j]] = [nums[j], nums[left]];
        } else {
            ++j;
            [nums[j], nums[right]] = [nums[right], nums[j]];
        }

        if (j <= k) {
            left  = j + 1;
        }   

        if (k <= j) {
            right = j - 1;
        }  
    }
  }


var findKthLargest = function(nums, k) {
    floydRivestSelect(nums, 0, nums.length - 1, nums.length - k)
    return nums[nums.length - k]
};
```

### Explanation
This problem was especially difficult for me due to one of the test cases having an array longer than 5,000 cells.
Initially, I used the quickselect algorithm, but the time complexity of `O(N^2)` proved to be too much for that
specific test case. 

I did some research and decided to impliment the Floyd-Rivest algorithm but subtracting kth largest element from the total array length to get the kth largest instead of kth smallest. The Floyd-Rivest algorithm takes `O(N)` time and `O(N)` space in the worst-case scenario. Becuase it's so efficient, it tended to beat many more leetcode submissions.

## 234: Palindrome Linked List

> [!NOTE]
>
> -   Difficulty: **Easy**
> -   Language: **Javascript**
> -   Time Complexity: **O(N)**
> -   Space Complexity: **O(N)**

### Description

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

### Code

```javascript
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
```

### Explanation
This algorithm uses the torise-hare algorithm and works in two parts. Part one starts by having the torise move once across the linked list and the hare move twice as much. If the list is circular, the eventuall the hare will run back into the torise and the algorithm returns `false`. If it is not ciruclar, the end is reached and the torise will be in the exact middle of the whole list. While the tortise was moving through the list, it was also leaving breadcrumbs (pointers) to the previous node so it could backtrack for part two. 

Part two starts with the tortise moving backwards and forwards at the same time constantly checking if the values of the nodes match. If it gets to the front and back at the same time, then the linked list was a palindrome.


## 241: Different Ways to Add Parenthesis

> [!NOTE]
>
> -   Difficulty: **Medium**
> -   Language: **Javascript**
> -   Time Complexity: **O(2^N)**
> -   Space Complexity: **O(C + k)**
>     - *k is the call stack size*
>     - *C is the result of each evaluation*

### Description

Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.

The test cases are generated such that the output values fit in a 32-bit integer and the number of different results does not exceed 104.

### Code
```javascript
const apply = function(operand1, operand2, operator) {
    if (operator === "+") {
        return Number(operand1) + Number(operand2)
    } else if (operator === "-") {
        return Number(operand1) - Number(operand2)
    } else {
        return Number(operand1) * Number(operand2)
    }
}

const diffWaysToCompute = function(expression) {
    let answers = [];
    let foundOperator = false;

    for (let i = 0; i < expression.length; i++) {
        const c = expression.charAt(i);

        if ("+-*".includes(c)) {
            const left = diffWaysToCompute(expression.slice(0, i));
            const right = diffWaysToCompute(expression.slice(i + 1));

            foundOperator = true;

            left.forEach(leftAnswer => {
                right.forEach(rightAnswer => {
                    answers.push(apply(leftAnswer, rightAnswer, c));
                })
            })
        }
    }

    if (!foundOperator) {
        return [Number(expression)];
    }

    return answers;
}
```

### Explanation
This algorithm works by going through each operator and recursively splitting each side into different parts. The result is the various combinations of adding parenthesis throughout the string.

## 329: Longest Increasing Path Matrix

> [!NOTE]
>
> -   Difficulty: **Hard**
> -   Language: **Python**
> -   Time Complexity: **O(N)**
> -   Space Complexity: **O(N)**

### Description

Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

### Code

```python
class Solution:

    def coordinate_to_index(self, coordinate: list[int, int], size: list[int, int]) -> int:
        m = size[1]

        x = coordinate[0]
        y = coordinate[1]

        index = x * m
        index += y

        return index

    def traverse_matrix(self, matrix: list[list[int]], position: list[int, int], size: list[int, int], memo: dict[int, int]):
        index = self.coordinate_to_index(position, size)

        if index in memo:
            return memo[index]
        else:
            row = position[0]
            col = position[1]

            memo[index] = 1 + max(
                self.traverse_matrix(matrix, [row-1, col], size, memo) if row > 0 and row <= size[0] - 1 and matrix[row][col] < matrix[row-1][col] else 0, # Up
                self.traverse_matrix(matrix, [row+1, col], size, memo) if row >= 0 and row < size[0] - 1 and matrix[row][col] < matrix[row+1][col] else 0, # Down
                self.traverse_matrix(matrix, [row, col-1], size, memo) if col > 0 and col <= size[1] - 1 and matrix[row][col] < matrix[row][col-1] else 0, # Left
                self.traverse_matrix(matrix, [row, col+1], size, memo) if col >= 0 and col < size[1] - 1 and matrix[row][col] < matrix[row][col+1] else 0 # Right
            )

            return memo[index]

    def longestIncreasingPath(self, matrix: list[list[int]]) -> int:
        m = len(matrix)
        n = len(matrix[0])

        size = [m,n]
        memo = {}
        output = 0

        for i in range(m):
            for j in range(n):
                self.traverse_matrix(matrix=matrix, position=[i,j], size=size, memo=memo)

        for val in memo:
            if output < memo[val]:
                output = memo[val]

        return output
```

### Explanation
Since this algorithm is recursive and has memoization, the time complexity is just `O(N)`. The algorithm works by iterating through each value in the matrix. When it's working on an value, it tries all the possible combinations of where it could go. It returns the largest of those combinations and saves the total number of combinations as the memo. The algorithm finishes by iterating through the memo and seeing which is the largest value. The largest value is the longest increasing path in a matrix. 

## 1032: Stream of Characters

> [!NOTE]
>
> -   Difficulty: **Hard**
> -   Language: **Python**
> -   Time Complexity: **O(N * M)**
>     - *N is the number of characters in the words list*
>     - *M is the number of queries made*
> -   Space Complexity: **O(N * M)**

### Description

Design an algorithm that accepts a stream of characters and checks if a suffix of these characters is a string of a given array of strings words.

For example, if words = ["abc", "xyz"] and the stream added the four characters (one by one) 'a', 'x', 'y', and 'z', your algorithm should detect that the suffix "xyz" of the characters "axyz" matches "xyz" from words.

Implement the StreamChecker class:

StreamChecker(String[] words) Initializes the object with the strings array words.
boolean query(char letter) Accepts a new character from the stream and returns true if any non-empty suffix from the stream forms a word that is in words.

### Code

```python
class ReverseTrieNode(object):
    def __init__(self):
        self.children: dict[str, ReverseTrieNode] = {}


class ReverseTrie(object):
    def __init__(self):
        self.root: ReverseTrieNode = ReverseTrieNode()

    def insert(self, word: str):
        current_node = self.root

        for letter in reversed(word):

            if letter not in current_node.children:
                current_node.children[letter] = ReverseTrieNode()

            current_node = current_node.children[letter]

        current_node.children["*"] = None

    def search(self, string: str) -> bool:
        current_node = self.root

        for char in reversed(string):
            if char not in current_node.children:
                break
            elif "*" in current_node.children:
                return True

            current_node = current_node.children[char]

        if "*" in current_node.children:
            return True
        else:
            return False

class StreamChecker(object):

    def __init__(self, words: list[str]):
        """
        :type words: List[str]
        """
        self.trie = ReverseTrie()
        self.characters = ""

        for word in words:
            self.trie.insert(word)


    def query(self, letter: str) -> bool:
        """
        :type letter: str
        :rtype: bool
        """
        self.characters += letter

        return self.trie.search(self.characters)
```

### Explanation
This is one of my favorite algorithms I made. It uses a reverse trie to figure out if any of the suffixes match the inputed words. It starts by initalizing the trie by parsing the letters of each word and placing it in the trie. It then goes through each query and sees if the last few characters match any of the words. The trie makes it inefficent when inputting the words, but when the words are in, it's very efficient to query. 
