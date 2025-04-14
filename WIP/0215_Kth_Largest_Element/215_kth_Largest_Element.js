/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class LargestElement {
    constructor(array) {
        this.array = array;
    }

    partition(leftPointer, rightPointer) {
        let pivotIndex = rightPointer;
        let pivot = this.array[pivotIndex];
        rightPointer -= 1;
    
        while (true) {
            while (this.array[leftPointer] < pivot) {
                leftPointer += 1;
            }
    
            while (this.array[rightPointer] > pivot) {
                rightPointer -= 1;
            }
    
            if (leftPointer >= rightPointer) {
                break;
            } else {
                [this.array[leftPointer], this.array[rightPointer]] = [this.array[rightPointer], this.array[leftPointer]];
                leftPointer += 1;
            }
        }
    
        [this.array[leftPointer], this.array[pivotIndex]] = [this.array[pivotIndex], this.array[leftPointer]]
    
        return leftPointer;
    }

 quickselect(leftIndex, rightIndex, k) {

    if (rightIndex - leftIndex <= 0) {
        return this.array[leftIndex];
    }

    const pivotIndex = this.partition(leftIndex, rightIndex);

    if (k < pivotIndex) {
        this.array = this.array.slice()
        return this.quickselect(leftIndex, pivotIndex - 1, k);
    } else if (k > pivotIndex) {
        return this.quickselect(pivotIndex + 1, rightIndex, k);
    } else {
        return this.array[pivotIndex];
    }
}
}

var findKthLargest = function(nums, k) {
    let answer = new LargestElement(nums);
    return answer.quickselect(0, nums.length - 1, nums.length - k)

};

console.log(findKthLargest([1,2,3,4,5,6,7,4,2,4,6,4,3,2,24,5,4,3,2,4,5,4,3,2], 7));
