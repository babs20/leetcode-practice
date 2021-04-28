/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = prices => {
  let profit = 0;
  let lowNum = Number.MAX_SAFE_INTEGER;

  for (const price of prices) {
    lowNum = price < lowNum ? price : lowNum;
    if (price - lowNum > profit) {
      profit = price - lowNum;
    }
  }
  return profit;
};

// Test Cases
const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
