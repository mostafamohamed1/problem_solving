/*
  Climbing Stairs

  You are climbing a staircase. It takes n steps to reach the top.
  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

  Example 1:
  Input: n = 2
  Output: 2
  Explanation: There are two ways to climb to the top.
  1. 1 step + 1 step
  2. 2 steps

  Example 2:
  Input: n = 3
  Output: 3
  Explanation: There are three ways to climb to the top.
  1. 1 step + 1 step + 1 step
  2. 1 step + 2 steps
  3. 2 steps + 1 step
*/

/*
  1+1+1+1
  1+1+2
  2+1+1
  1+2+1
  2+2
*/

var climbStairs = function (n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  let arr = [1, 2];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[arr.length - 1];
};

console.log(climbStairs(4));

var climbStairs2 = function (n) {
  if (n == 1) return n;

  let x = 1,
    y = 2;
  for (let i = 3; i <= n; i++) {
    let temp = y;
    y = x + y;
    x = temp;
  }
  return y;
};

console.log(climbStairs2(4));
