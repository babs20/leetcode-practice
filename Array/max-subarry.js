/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = nums => {
  let maxSoFar = Number.MIN_SAFE_INTEGER;
  let maxEndingHere = 0;

  for (let i = 0; i < nums.length; i++) {
    maxEndingHere += nums[i];
    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
    }

    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
  }

  return maxSoFar;
};

// Test Cases
const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums2 = [1];
const nums3 = [5, 4, -1, 7, 8];

console.log(maxSubArray(nums1));
console.log(maxSubArray(nums2));
console.log(maxSubArray(nums3));
