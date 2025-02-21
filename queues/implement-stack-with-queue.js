/**
 * From Leetcode Problem #225. Implement Stack using Queues
 * Link: https://leetcode.com/problems/implement-stack-using-queues/description/
 * Difficulty: Easy
 * Implemented using a single queue.
 */

let MyStack = function () {
  this.queue = [];
};

/**
 *
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  for (let i = 0; i < this.queue.length - 1; i++) {
    this.queue.push(this.queue.shift());
  }

  return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let topValue = this.pop();

  this.queue.push(topValue);

  return topValue;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};
