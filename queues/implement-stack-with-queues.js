/**
 * From Leetcode Problem #225. Implement Stack using Queues
 * Link: https://leetcode.com/problems/implement-stack-using-queues/description/
 * Difficulty: Easy
 */

// can only use push and shift
// shift everything off one, and push onto other till end, then push back onto main
let MyStack = function () {
  this.mainQueue = [];
  this.bounceQueue = [];
  // this.isBounce = false;
};

/**
 *
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.mainQueue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let shiftedValue;

  while (this.mainQueue.length > 0) {
    shiftedValue = this.mainQueue.shift();
    if (!this.empty()) this.bounceQueue.push(shiftedValue);
  }

  while (this.bounceQueue.length > 0) {
    this.mainQueue.push(this.bounceQueue.shift());
  }

  return shiftedValue;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let topValue = this.pop();

  this.mainQueue.push(topValue);

  return topValue;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.mainQueue.length === 0;
};
