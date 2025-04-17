/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
  
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

console.log(findKthLargest([1,2,3,4,5,6,7,4,2,4,6,4,3,2,24,5,4,3,2,4,5,4,3,2], 7));
