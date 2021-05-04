/**
 * @param {number} n
 * @return {number}
 */

// Brute Force
const recursiveStairs = (i, n) => {
  if (i > n) {
    return 0;
  }

  if (i == n) {
    return 1;
  }

  return recursiveStairs(i + 1, n) + recursiveStairs(i + 2, n);
};

const climbStairs = function (n) {
  return recursiveStairs(0, n);
};

// Dynamic Programming **Better for speed because of JS idiosyncracy worse for memory**
const climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }

  const array = [];
  array[1] = 1;
  array[2] = 2;

  for (let i = 3; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }

  return array[n];
};

// Fibonacci Programming **Slightly slower speed because of JS idiosyncracy better for memory**
const climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }

  first = 1;
  second = 2;

  for (let i = 3; i <= n; i++) {
    third = first + second;
    first = second;
    second = third;
  }

  return second;
};
