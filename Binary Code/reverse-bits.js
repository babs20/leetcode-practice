/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

const reverseBits = function (n) {
  const reversedNumber = n
    .toString(2)
    .split('')
    .reverse()
    .join('')
    .padEnd(32, '0');

  return Number.parseInt(reversedNumber, 2);
};

console.log(reverseBits(00000010100101000001111010011100));
