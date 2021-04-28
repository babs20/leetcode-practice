/**
 * @param {number[]} nums
 * @return {number}
 */

const maxProduct = nums => {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
    let curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

    prevMax = curMax;
    prevMin = curMin;

    result = Math.max(prevMax, result);
  }
  return result;
};

//Test Cases
const nums1 = [-2, 0, -1];
const nums2 = [2, 3, -2, 4];

console.log(maxProduct(nums1));
console.log(maxProduct(nums2));
