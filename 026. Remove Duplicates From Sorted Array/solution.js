// Source : https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
// Author : kokoFE
// Date   : 2020-04-23

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates1 = function (nums) {
  for (let i = 0, len = nums.length; i < len;) {
    const num = nums[i];
    if (nums.indexOf(num) < i) {
      nums.splice(i, 1);
      // i ;
      len--;
    } else {
      i++
    }
  }
  return nums.length;
};

// 给定 nums = [0,0,1,1,1,2,2,3,3,4],
// 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
// 你不需要考虑数组中超出新长度后面的元素。

var removeDuplicates2 = function (nums) {
  var j = 0;
  var n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};

var removeDuplicates3 = function (nums) {
  if (nums.length === 0) return 0;
  let L = 0;
  let R = 1;
  while (R < nums.length) {
    if (nums[L] !== nums[R]) {
      nums[L + 1] = nums[R];
      L++;
    }
    R++;
  }
  return L + 1;
};