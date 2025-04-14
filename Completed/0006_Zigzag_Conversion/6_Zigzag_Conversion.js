/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 
 */

var convert = function(s, numRows) {
    
    if (numRows === 1 ) {
        return s;
    }
    
    let matrix = [...Array(numRows)].map(e => "")
    let row = 0;
    let increment = 1;

    for (let i = 0; i < s.length; i++) {
        matrix[row] += s[i]
        if (row === 0) {
            increment = 1;
        } else if (row === numRows - 1) {
            increment = -1;
        }
        row += increment;
    }

    return matrix.join("");
};

console.log(convert("PAYPALISHIRING", 3)) // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)) // "PINALSIGYAHRPI"
console.log(convert("AB", 1)) // "AB"