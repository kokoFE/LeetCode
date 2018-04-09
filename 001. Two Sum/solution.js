// Source : https://leetcode.com/problems/two-sum/
// Author : kokoFE
// Date   : 2018-04-03

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
      let prev = nums[i]
      for (let j = i + 1; j < len; j++){
          let next = nums[j]
          if (prev + next === target) {
              return [i, j]
          }
      }
  }
};

var twoSum = function(nums, target) {
  let map = {}
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i]
    } else {
      map[nums[i]] = i
    }
  }
};