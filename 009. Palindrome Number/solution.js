// Source : https://leetcode.com/problems/palindrome-number/
// Author : kokoFE
// Date   : 2018-06-21

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 == 0 && x !=0)) {
    return false
  }
  let revNum = 0;
  // let x = x
  while (x > revNum) {
    revNum = revNum * 10 + x % 10
    x = parseInt(x / 10)
  }
  return x == revNum || x == parseInt(revNum / 10)
};