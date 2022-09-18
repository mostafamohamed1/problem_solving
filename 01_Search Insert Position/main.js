/*
  Search Insert Position

  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

  You must write an algorithm with O(log n) runtime complexity.



  Example 1:
  Input: nums = [1,3,5,6], target = 5
  Output: 2

  Example 2:
  Input: nums = [1,3,5,6], target = 2
  Output: 1

  Example 3:
  Input: nums = [1,3,5,6], target = 7
  Output: 4
*/

// Solution 1

/*
  Tested On Leet Code
  Runtime: 60 ms, faster than 95.78% of JavaScript online submissions for Search Insert Position.
*/

var searchInsert = function (nums, target) {
  let index = nums.indexOf(target);
  if (index != '-1') return index;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      return i;
    }
  }
  return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));

// Solution 2

/*
  Tested On Leet Code
  Runtime: 64 ms, faster than 91.90% of JavaScript online submissions for Search Insert Position.
*/
var searchInsert2 = function (nums, target) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] >= target) break;
    i++;
  }
  return i;
};

console.log(searchInsert2([1, 3, 5, 6], 5));
console.log(searchInsert2([1, 3, 5, 6], 2));
