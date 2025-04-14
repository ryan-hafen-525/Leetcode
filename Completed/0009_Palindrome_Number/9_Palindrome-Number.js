/**
 * @param {number} x
 * @return {boolean}
 */
// Time complexity = O(N)
var isPalindrome = function(x) {
    let temp = String(x).split('').reverse().join('');
    return parseInt(temp) === x;
};

// Time complexity = 0(N)
var isPalindrome = function(x) {
    let temp = String(x).split('');
    let isDrome = true;
    let lowerIndex = 0;
    let higherIndex = temp.length - 1;

    while (isDrome) {
        if (temp[lowerIndex] != temp[higherIndex]) {
            return false
        }
        lowerIndex++
        higherIndex--
        if (lowerIndex >= higherIndex) {
            return true
        }
    }
};

let isTrue = 1234321
let isFalse = 1234512
console.log(isPalindrome(isFalse));
console.log(isPalindrome(isTrue));