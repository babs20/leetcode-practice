/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = nums => {
  const numsSet = new Set(nums);
  return numsSet.size < nums.length;
};

// Test Cases
const nums1 = [1, 2, 3, 1];
const nums2 = [1, 2, 3, 4];
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));
console.log(containsDuplicate(nums3));
