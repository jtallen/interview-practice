/**
 * From Leetcode Problem #707. Design Linked List
 * Link: https://leetcode.com/problems/design-linked-list/
 * Difficulty: Medium
 */

let ListNode = function (val, next = null, prev = null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
};

let MyLinkedList = function () {
  this.head = null;
  this.tail = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let curr = this.head;

  let i = 0;

  while (curr !== null) {
    if (i === index) {
      return curr.val;
    }
    curr = curr.next;
    i++;
  }

  return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new ListNode(val);

  newNode.next = this.head;

  if (this.head === null) {
    this.tail = newNode;
  } else {
    this.head.prev = newNode;
  }

  this.head = newNode;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new ListNode(val);

  newNode.prev = this.tail;

  if (this.tail === null) {
    this.head = newNode;
  } else {
    this.tail.next = newNode;
  }

  this.tail = newNode;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let newNode = new ListNode(val);
  let i = 0;

  let curr = this.head;

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  while (curr !== null) {
    if (index === i) {
      newNode.prev = curr.prev;
      curr.prev.next = newNode;

      newNode.next = curr;
      curr.prev = newNode;

      return;
    }
    curr = curr.next;
    i++;
  }

  if (index === i) {
    this.addAtTail(val);
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let i = 0;

  // 1. the list is empty
  // 2. the index is 0
  // 3. the index is the tail

  let curr = this.head;

  while (curr !== null) {
    if (index === i) {
      // case 1: removing a head node
      if (curr === this.head) {
        this.head = this.head.next;
        if (this.head !== null) this.head.prev = null;
        if (curr === this.tail) this.tail = null; // if the list only had 1 node
        return;
      }
      // case 2: removing a tail node
      if (curr === this.tail) {
        this.tail = this.tail.prev;
        this.tail.next = null;
        return;
      }
      // case 3: removing a middle node
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;

      curr.prev = null;
      curr.next = null;

      return;
    }

    curr = curr.next;
    i++;
  }
};
