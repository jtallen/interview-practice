/**
 * From Leetcode Problem #206. Reverse Linked List
 * Link: https://leetcode.com/problems/reverse-linked-list/description/
 * Difficulty: Easy
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
