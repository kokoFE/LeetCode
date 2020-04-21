// Source : https://leetcode-cn.com/problems/count-number-of-nice-subarrays/
// Author : kokoFE
// Date   : 2020-04-21

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  if (nums.length === 0 || nums.length < k) return 0;
  const oddIndexs = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] % 2 === 1) oddIndexs.push(i);
  }
  if (oddIndexs.length < k) return 0;
  let i = 0;
  let count = 0
  while (i < oddIndexs.length - k) {
    const temp = oddIndexs.slice(i, i + k);
    const L = oddIndexs[i];
    const R = oddIndex[i + k];
    let prev
    if (oddIndexs[i - 1]) {
      prev = oddIndexs[i - 1]
    }
    const prev = L > 0 ? L : 0
    const next = oddIndexs[i + k + 1]
    i++
  }
};