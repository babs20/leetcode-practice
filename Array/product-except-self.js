/**
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = nums => {
  let len = nums.length;
  let answer = [1];
  let right = 1;

  for (let i = 1; i < len; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  for (let i = len - 1; i > -1; i--) {
    answer[i] = answer[i] * right;
    right *= nums[i];
  }

  return answer;
};

// Test Cases
const nums1 = [1, 2, 3, 4];
const nums2 = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(nums1));
console.log(productExceptSelf(nums2));
