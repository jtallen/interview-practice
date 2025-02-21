/**
 * From Leetcode Problem #1472. Design Browser History
 * Link: https://leetcode.com/problems/design-browser-history/description/
 * Difficulty: Medium
 * Solved using a doubly-linked list.
 */

let HistoryNode = function (url) {
  this.url = url;
  this.next = null;
  this.prev = null;
};

/**
 * @param {string} homepage
 */
let BrowserHistory = function (homepage) {
  this.current = new HistoryNode(homepage);
  this.head = this.current;

  this.tail = this.head;

  this.historyLength = 0;
  this.futureLength = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.current.next = new HistoryNode(url);
  this.current.next.prev = this.current;

  this.current = this.current.next;

  this.tail = this.current;

  this.futureLength = 0;
  this.historyLength++;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  // if steps is out of bounds or takes us to the beginning
  if (steps >= this.historyLength) {
    this.current = this.head;

    this.futureLength += this.historyLength;
    this.historyLength = 0;

    return this.current.url;
  }

  for (let i = 0; i < steps; i++) {
    this.current = this.current.prev;

    this.historyLength--;
    this.futureLength++;
  }

  return this.current.url;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  // if steps is out of bounds or takes us to the beginning
  if (steps >= this.futureLength) {
    this.current = this.tail;

    this.historyLength += this.futureLength;
    this.futureLength = 0;

    return this.current.url;
  }

  for (let i = 0; i < steps; i++) {
    this.current = this.current.next;

    this.historyLength++;
    this.futureLength--;
  }

  return this.current.url;
};
