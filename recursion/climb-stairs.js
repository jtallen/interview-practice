/**
 * From Leetcode Problem #70. Climbing Stairs
 * Link: https://leetcode.com/problems/climbing-stairs/description/
 * Difficulty: Easy
 * Dynamic programming problem.
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let first = 1;
  let second = 1;
  let temp;

  for (let i = 0; i < n - 1; i++) {
    temp = first;
    first = first + second;
    second = temp;
  }

  return first;
};
