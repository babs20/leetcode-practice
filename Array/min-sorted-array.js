/**
 * @param {number[]} nums
 * @return {number}
 */

const findMin = nums => {
  if (nums.length === 1) return nums[0];
  if (nums[0] < nums[nums.length - 1]) return nums[0];

  while (nums.length > 0) {
    let mid = Math.floor((nums.length - 1) / 2);

    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    } else if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }

    if (nums[mid] > nums[0]) {
      nums.splice(0, mid);
    } else {
      nums.splice(mid);
    }
  }
};

// Test Cases
const nums1 = [3, 4, 5, 1, 2];
const nums2 = [4, 5, 6, 7, 0, 1, 2];
const nums3 = [11, 13, 15, 17];

console.log(findMin(nums1));
console.log(findMin(nums2));
console.log(findMin(nums3));
