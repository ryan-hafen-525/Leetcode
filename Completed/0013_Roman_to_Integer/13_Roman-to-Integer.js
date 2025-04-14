/**
 * @param {string} s
 * @return {number}
 */

const numerals = {
    'M': 1000, 
    'D': 500, 
    'C': 100, 
    'L': 50, 
    'X': 10, 
    'V': 5,
    'I': 1
}

function calculateValue(currentChar, nextChar, index) {
    let value = 0;
    if (numerals[currentChar] < numerals[nextChar]) {
        index += 1;
        value = numerals[nextChar] - numerals[currentChar]
        return [value, index];
    } else {
        value = numerals[currentChar]
        return [value, index];
    }
}

var romanToInt = function(s) {
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

console.log(romanToInt("MMMCCLXIV"))