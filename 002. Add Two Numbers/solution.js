// Source : https://leetcode.com/problems/add-two-numbers
// Author : kokoFE
// Date   : 2018-05-07

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let arr = []
  let plus = undefined
  while((l1 && l2) || plus) {
    let prev = l1.val;
    let next = l2.val;
    let sum = 0
    if (plus) {
      sum = prev + next + plus;
    } else {
      sum = prev + next
    }
    plus = Math.floor(sum/10)
    arr.push(sum%10)
    l1 = l1 !== null ? l1.next : null;
    l2 = l2 !== null ? l2.next : null;
  }
  return arr
};