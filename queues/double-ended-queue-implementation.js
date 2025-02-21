// From Leetcode Problem Design a Double-Ended Queue
// Link: https://neetcode.io/problems/queue
// Difficulty: Easy

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDeque {
  constructor() {
    this.tail = null;
    this.head = null;
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * @param {number} value
   */
  append(value) {
    const newNode = new QueueNode(value);

    // case 1: empty list
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = this.head;
      return;
    }

    // case 2: populated list
    this.tail.next = newNode;
    newNode.prev = this.tail;

    this.tail = newNode;
  }

  /**
   * @param {number} value
   * @return {void}
   */
  appendleft(value) {
    const newNode = new QueueNode(value);

    // case 1: empty list
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = this.head;
      return;
    }

    // case 2: populated list
    newNode.next = this.head;
    this.head.prev = newNode;

    this.head = newNode;
  }

  /**
   * @return {void}
   */
  pop() {
    if (this.isEmpty()) return -1;

    const popNode = this.tail;

    if (popNode === this.head) {
      this.tail = null;
      this.head = null;
      return popNode.value;
    }

    popNode.prev.next = null;
    this.tail = popNode.prev;
    popNode.prev = null;

    return popNode.value;
  }

  /**
   * @return {number}
   */
  popleft() {
    if (this.isEmpty()) return -1;

    const popNode = this.head;

    if (popNode === this.tail) {
      this.tail = null;
      this.head = null;
      return popNode.value;
    }

    popNode.next.prev = null;
    this.head = popNode.next;
    popNode.next = null;

    return popNode.value;
  }
}
