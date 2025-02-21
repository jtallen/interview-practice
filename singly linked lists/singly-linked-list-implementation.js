// From Leetcode Problem Design a Singly Linked List
// Link: https://neetcode.io/problems/singlyLinkedList
// Difficulty: Easy

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let currNode = this.head;
    let i = 0;

    while (currNode !== null) {
      if (index === i) {
        return currNode.val;
      }
      i++;
      currNode = currNode.next;
    }

    return -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    this.head = { val, next: this.head };
    if (this.tail === null) this.tail = this.head;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    if (this.tail !== null) {
      this.tail.next = { val, next: null };
      this.tail = this.tail.next;
    } else {
      this.head = { val, next: null };
      this.tail = this.head;
    }
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    let currNode = this.head;
    let i = 1;

    if (index === 0) {
      if (this.head === null) return false;
      if (this.tail === this.head) this.tail = null;
      this.head = this.head.next;
      return true;
    }

    while (currNode.next !== null) {
      if (index === i) {
        if (currNode.next === this.tail) this.tail = currNode;
        currNode.next = currNode.next.next;
        return true;
      }
      i++;
      currNode = currNode.next;
    }

    return false;
  }

  /**
   * @return {number[]}
   */
  getValues() {
    const vals = [];

    let currNode = this.head;

    while (currNode !== null) {
      vals.push(currNode.val);
      currNode = currNode.next;
    }

    return vals;
  }
}
