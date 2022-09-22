/*
  Add Binary
  Given two binary strings a and b, return their sum as a binary string.

  Example 1:
  Input: a = "11", b = "1"
  Output: "100"

  Example 2:
  Input: a = "1010", b = "1011"
  Output: "10101"



"10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"

"110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
"110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
*/

var addBinary = function (a, b) {
  let bA = BigInt(`0b${a}`);
  let bB = BigInt(`0b${b}`);
  let sum = bA + bB;
  return sum.toString(2);
};

console.log(
  addBinary(
    '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
    '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011',
  ),
);


var addBinary = function(a, b) {
  let i = a.length - 1, j = b.length - 1;
  let res = new Array(Math.max(a.length, b.length) + 1);
  let idx = Math.max(i, j) + 1;
  let carry = 0, sum = 0;
  while (i >= 0 && j >= 0) {
      sum = Number(a[i--]) + Number(b[j--]) + carry;
      res[idx--] = sum % 2;
      carry  = sum >= 2 ? 1 : 0;
  }
  
  while (i >= 0) {
      sum = Number(a[i--]) + carry;
      res[idx--] = sum % 2;
      carry  = sum >= 2 ? 1 : 0;
  }

  while (j >= 0) {
      sum = Number(b[j--]) + carry;
      res[idx--] = sum % 2;
      carry  = sum >= 2 ? 1 : 0;
  }
  if (carry > 0) {
      res[0] = carry;
  }
  return res.join("");
};