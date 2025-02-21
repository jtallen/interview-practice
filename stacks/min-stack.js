/**
 * From Leetcode Problem #155. Min Stack
 * Link: https://leetcode.com/problems/min-stack/description/
 * Difficulty: Medium
 */

var MinStack = function () {
  this.stackArray = [];
  this.minArray = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (
    this.minArray[this.minArray.length - 1] === undefined ||
    this.minArray[this.minArray.length - 1] >= val
  ) {
    this.minArray.push(val);
  }

  this.stackArray.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (
    this.minArray[this.minArray.length - 1] ===
    this.stackArray[this.stackArray.length - 1]
  ) {
    this.minArray.pop();
  }

  return this.stackArray.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stackArray[this.stackArray.length - 1]; // should return undefined for length = 0
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minArray[this.minArray.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
