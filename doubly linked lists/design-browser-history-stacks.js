/**
 * From Leetcode Problem #1472. Design Browser History
 * Link: https://leetcode.com/problems/design-browser-history/description/
 * Difficulty: Medium
 * Solved using stacks.
 */

/**
 * @param {string} homepage
 */
let BrowserHistory = function (homepage) {
  this.current = homepage;

  this.history = [];
  this.future = [];
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.future = [];
  this.history.push(this.current);

  this.current = url;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let i = 0;

  while (this.history.length > 0 && i < steps) {
    this.future.push(this.current);
    this.current = this.history.pop();

    i++;
  }

  return this.current;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let i = 0;

  while (this.future.length > 0 && i < steps) {
    this.history.push(this.current);
    this.current = this.future.pop();

    i++;
  }

  return this.current;
};
