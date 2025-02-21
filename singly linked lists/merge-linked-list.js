/**
 * From Leetcode Problem #21. Merge Two Sorted Lists
 * Link: https://leetcode.com/problems/merge-two-sorted-lists/description/
 * Difficulty: Easy
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
let mergeTwoLists = function (list1, list2) {
  let anchor = { val: null, next: null };
  let curr = anchor;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (list1 === null) {
    curr.next = list2;
  } else {
    curr.next = list1;
  }

  return anchor.next;
};
