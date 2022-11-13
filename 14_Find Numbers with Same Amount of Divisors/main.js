/*
  Find Numbers with Same Amount of Divisors


  The integers 14 and 15, are contiguous (1 the difference between them, obvious) and have the same number of divisors.

  14 ----> 1, 2, 7, 14 (4 divisors)
  15 ----> 1, 3, 5, 15 (4 divisors)
  The next pair of contiguous integers with this property is 21 and 22.

  21 -----> 1, 3, 7, 21 (4 divisors)
  22 -----> 1, 2, 11, 22 (4 divisors)
  We have 8 pairs of integers below 50 having this property, they are:

  [[2, 3], [14, 15], [21, 22], [26, 27], [33, 34], [34, 35], [38, 39], [44, 45]]
  Let's see now the integers that have a difference of 3 between them. There are seven pairs below 100:

  [[2, 5], [35, 38], [55, 58], [62, 65], [74, 77], [82, 85], [91, 94]]
  Let's name, diff, the difference between two integers, next and prev, (diff = next - prev) and nMax, an upper bound of the range.

  We need a special function, count_pairsInt(), that receives two arguments, diff and nMax and outputs the amount of pairs of integers that fulfill this property, all of them being smaller (not smaller or equal) than nMax.

  Let's see it more clearly with examples.

  count_pairsInt(1, 50) -----> 8 (See case above)
  count_pairsInt(3, 100) -----> 7 (See case above)
  Happy coding!!!

*/

var lst = [
  [1, 50, 8],
  [3, 100, 7],
  [3, 200, 18],
  [6, 350, 86],
  [6, 1000, 214],
  [7, 1500, 189],
  [7, 3000, 366],
  [9, 4000, 487],
  [9, 5000, 622],
  [11, 5000, 567],
];

function countPairsInt(diff, nMax) {
  let values = { 0: 0, 1: 1 };
  let pairs = 0;

  for (let i = nMax - 1; i >= 2; i--) {
    values[i] = factors(i);
    if (values[i] === values[i + diff]) {
      pairs++;
    }
  }
  return pairs;
}

function factors(n) {
  let count = 2;
  for (let j = 2; j <= Math.ceil(n / 2); j++) {
    if (n % j === 0) count++;
  }
  return count;
}

debugger;
for (var i = 0; i < lst.length; i++) {
  console.log(
    "diff " + lst[i][0] + " nMax " + lst[i][1] + " sol: " + lst[i][2]
  );
  console.log(countPairsInt(lst[i][0], lst[i][1]));
}
