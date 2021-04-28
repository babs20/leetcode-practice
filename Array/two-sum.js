/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    let match = target - nums[i];

    if (hash.has(match)) {
      return [i, hash.get(match)];
    }

    hash.set(nums[i], i);
  }
};
