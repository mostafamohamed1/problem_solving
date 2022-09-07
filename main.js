/*
  Duplicate Encoder

  The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.


  "din"      =>  "((("
  "recede"   =>  "()()()"
  "Success"  =>  ")())())"
  "(( @"     =>  "))((" 

*/

function duplicateEncode1(word) {
  let str = word.toLowerCase();
  let obj = {};
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) obj[str[i]] = '(';
    else obj[str[i]] = ')';
  }
  for (let i = 0; i < str.length; i++) {
    arr.push(obj[str[i]]);
  }
  return arr.join('');
}

console.log(duplicateEncode1('recede'));

function duplicateEncode2(word) {
  return word
    .toLowerCase()
    .split('')
    .map((el, i, arr) => (arr.indexOf(el) == arr.lastIndexOf(el) ? '(' : ')'))
    .join('');
}

console.log(duplicateEncode2('recede'));

// =========================================================================================

/*
  Count the number of Duplicates

  Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

  Example
  "abcde" -> 0 # no characters repeats more than once
  "aabbcde" -> 2 # 'a' and 'b'
  "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
  "indivisibility" -> 1 # 'i' occurs six times
  "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
  "aA11" -> 2 # 'a' and '1'
  "ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount1(text) {
  let str = text.toLowerCase();
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) obj[str[i]] = 0;

    obj[str[i]] = obj[str[i]] += 1;
  }

  let a = Object.values(obj).filter((el) => el > 1);
  return a.length;
}

console.log(duplicateCount1('text'));

function duplicateCount2(text) {
  let count = text
    .toLowerCase()
    .split('')
    .reduce((acc, cur) => {
      acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
      return acc;
    }, {});
  return Object.keys(count).filter((el) => count[el] > 1).length;
}

console.log(duplicateCount2('textwwccss'));

console.log();

let x = 'textxxccvvvvv1111'.toLowerCase().split('').sort().join('');

console.log(x.match(/([^])\1/g));

// =========================================================================================
/*
  Basic Mathematical Operations


  Your task is to create a function that does four basic mathematical operations.

  The function should take three arguments - operation(string/char), value1(number), value2(number).
  The function should return result of numbers after applying the chosen operation.


  ('+', 4, 7) --> 11
  ('-', 15, 18) --> -3
  ('*', 5, 5) --> 25
  ('/', 49, 7) --> 7
*/

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log(basicOp('+', 1, 3));
// =========================================================================================
/*
  String repeat
  Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

  6, "I"     -> "IIIIII"
  5, "Hello" -> "HelloHelloHelloHelloHello"
*/

function repeatStr(n, s) {
  return n == 1 ? s : (n += repeatStr((n -= 1), s));
}

// =========================================================================================
/*
  Highest and Lowest

  In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

  highAndLow("1 2 3 4 5");  // return "5 1"
  highAndLow("1 2 -3 4 5"); // return "5 -3"
  highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers) {
  return `${Math.max(...numbers.split(' '))} ${Math.min(
    ...numbers.split(' '),
  )}`;
}

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));

// =========================================================================================
/*
  Beginner Series #2 Clock

  Clock shows h hours, m minutes and s seconds after midnight.
  Your task is to write a function which returns the time since midnight in milliseconds.

  h = 0
  m = 1
  s = 1

  result = 61000
*/

function past(h, m, s) {
  return s * 1000 + m * 60 * 1000 + h * 60 * 60 * 1000;
}

// =========================================================================================
/*
  Number of People in the Bus

  There is a bus moving in the city, and it takes and drop some people in each bus stop.

  You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

  Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

  Take a look on the test cases.

  Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

  The second value in the first integer array is 0, since the bus is empty in the first bus stop.
*/

var number1 = function (busStops) {
  let getIn = busStops.map((el) => el[0]).reduce((acc, cur) => (acc += cur));
  let getOut = busStops.map((el) => el[1]).reduce((acc, cur) => (acc += cur));
  return getIn - getOut;
};

console.log(
  number1([
    [10, 0],
    [3, 5],
    [5, 8],
  ]),
);

const number2 = (busStops) =>
  busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// =========================================================================================

/*
  Sum of positive
  You get an array of numbers, return the sum of all of the positives ones.

  Example [1,-4,7,12] => 1 + 7 + 12 = 20
*/

function positiveSum(arr) {
  return arr.reduce((acc, cur) => {
    cur >= 0 ? (acc += cur) : 0;
    return acc;
  }, 0);
}

console.log(positiveSum([10, -7, 1, 2]));
// =========================================================================================
/*
  Jaden Casing Strings

  Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

  Example -
  Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
  Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(' ');
};

console.log('mustafa mohamed'.toJadenCase());

console.log('mustafa mohamed'.replace(/(^|\s)[a-z]/g, (x) => x.toUpperCase()));

// =========================================================================================

/*

  
  Categorize New Member

  The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

  To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

  Example
  input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
  output = ["Open", "Open", "Senior", "Open", "Open", "Senior"] 

*/

function openOrSenior(data) {
  return data.reduce((acc, [i0, i1]) => {
    acc.push(i0 >= 55 && i1 > 7 ? 'Senior' : 'Open');
    return acc;
  }, []);
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ]),
);

// =========================================================================================
/*
  Grasshopper - Grade book

  Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.


  
  Numerical Score	Letter Grade
  90 <= score <= 100	'A'
  80 <= score < 90	'B'
  70 <= score < 80	'C'
  60 <= score < 70	'D'
  0 <= score < 60	'F'
*/

function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;
  return average >= 90
    ? 'A'
    : average >= 80
    ? 'B'
    : average >= 70
    ? 'C'
    : average >= 60
    ? 'D'
    : 'F';
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(100, 85, 96));
console.log(getGrade(92, 93, 94));

console.log(getGrade(70, 70, 100));
console.log(getGrade(82, 85, 87));
console.log(getGrade(84, 79, 85));
console.log(getGrade(89, 89, 90));

// =========================================================================================

/*
  Printer Errors

  In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

  The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

  Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

  You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

  The string has a length greater or equal to one and contains only letters from ato z.

  Examples:
  s="aaabbbbhaijjjm"
  printer_error(s) => "0/14"

  s="aaaxbbbbyyhwawiwjjjwwm"
  printer_error(s) => "8/22"
*/

function printerError(s) {
  return `${s.replace(/[a-m]/gi, '').length}/${s.length}`;
}

console.log(
  printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'),
);

// =========================================================================================
/*
  Function 3 - multiplying two numbers


  Implement a function called multiply, which takes two numbers and returns their product:

  Example
  multiply(2, 3) = 6
  multiply(0, 188) = 0
  multiply(85, 144) = 12240
*/

const multiply = (x, y) => x * y;

console.log(multiply(2, 3));

// =========================================================================================

/*
  The Supermarket Queue

  There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

  input
    customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
    n: a positive integer, the number of checkout tills.

  output
    The function should return an integer, the total time required.

  Examples

    queueTime([5,3,4], 1) 
    // should return 12
    // because when there is 1 till, the total time is just the sum of the times

    queueTime([10,2,3,3], 2)
    // should return 10
    // because here n=2 and the 2nd, 3rd, and 4th people in the 
    // queue finish before the 1st person has finished.

    queueTime([2,3,10], 2)
    // should return 12
*/

function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  console.log(w);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}

console.log(queueTime([], 1));
console.log(queueTime([1, 2, 3, 4], 1));
console.log(queueTime([2, 2, 3, 3, 4, 4], 2));
console.log(queueTime([1, 2, 3, 4, 5], 100));

// =========================================================================================

/*
Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

It should look like this:

  Sam Harris => S.H

  patrick feeney => P.F
*/

function abbrevName(name) {
  return `${name.split(' ')[0][0].toUpperCase()}.${name
    .split(' ')[1][0]
    .toUpperCase()}`;
}

console.log(abbrevName('Mustafa Mohamed'));
console.log(abbrevName('mahmoud Mohamed'));

// =========================================================================================

/*
Sum Mixed Array

  Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

  Return your answer as a number.
  
*/

function sumMix(x) {
  return x.reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

console.log(sumMix([9, 3, '7', '3']));

// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

// console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));

// =========================================================================================
/*
If you can't sleep, just count sheep!!

  Task:
  Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

  */

var countSheep = function (num) {
  let counter = 0;
  let result = '';
  for (; counter++ < num; ) {
    result += `${counter} sheep...`;
  }
  return result;
};

console.log(countSheep(3));

// =========================================================================================
/*

  Array.diff

  Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

  It should remove all values from list a, which are present in list b keeping their order.
  
  arrayDiff([1,2],[1]) == [2]

  If a value is present in b, all of its occurrences must be removed from the other:

  arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

function arrayDiff(a, b) {
  return a.filter((el, i, arr) => {
    return b.indexOf(el) === -1;
  });
}

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 3], [1, 2]));

// =========================================================================================
/*
Beginner Series #1 School Paperwork

  Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

  Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
  
  Example:
  n= 5, m=5: 25
  n=-5, m=5:  0
*/

function paperwork(n, m) {
  if (n < 0 || m < 0) return 0;
  return n * m;
}

console.log(paperwork(5, 5));
console.log(paperwork(5, -5));

// =========================================================================================
/*
Volume of a Cuboid

  Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
*/

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

console.log(Kata.getVolumeOfCuboid(1, 2, 2));
console.log(Kata.getVolumeOfCuboid(6.3, 2, 5));

// =========================================================================================
/*
Build a pile of Cubes

  Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

  You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

  The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

  Examples:
    findNb(1071225) --> 45

    findNb(91716553919377) --> -1
*/
function findNb(m) {
  var n = 0;
  while (m > 0) {
    m -= Math.pow(++n, 3);
  }

  return m ? -1 : n;
}

console.log(findNb(4183059834009));
// console.log(findNb(24723578342962));
// console.log(findNb(135440716410000));
// console.log(findNb(40539911473216));

// =========================================================================================
/*
Beginner Series #4 Cockroach
  
  The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
  
  For example:
  1.08 --> 30
  */

function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600); // s * 100000 = cm / 3600 is hour in seconds
}

// =========================================================================================
/*
Equal Sides Of An Array

  You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

  For example:

  Let's say you are given the array {1,2,3,4,3,2,1}:
  Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
*/

function findEvenIndex(arr) {
  const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
  return arr.findIndex(
    (val, idx) => sum(arr.slice(0, idx)) === sum(arr.slice(idx + 1)),
  );
}

console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));

// =========================================================================================
/*
Thinkful - Logic Drills: Traffic light

  You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

  Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

  For example, when the input is green, output should be yellow.
*/
function updateLight(current) {
  return current == 'green'
    ? 'yellow'
    : current == 'yellow'
    ? 'red'
    : current == 'red'
    ? 'green'
    : '';
}
// =========================================================================================

/*
Reversed sequence

  Build a function that returns an array of integers from n to 1 where n>0.

  Example : n=5 --> [5,4,3,2,1]
  
  */

const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) arr.push(i);
  return arr;
};

console.log(reverseSeq(5));
// =========================================================================================

/*
Two Sum

  Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

*/

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      let index1 = numbers[i];
      let index2 = numbers[j];
      if (index1 + index2 === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([1, 2, 3], 4));
// =========================================================================================
/*
  Delete occurrences of an element if it occurs more than n times

  Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
  For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
  With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/

function deleteNth(arr, n) {
  let newArr = [];
  let freqObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!freqObj[arr[i]]) freqObj[arr[i]] = 0;
    if (freqObj[arr[i]] != n) freqObj[arr[i]]++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (freqObj[arr[i]] != 0) {
      newArr.push(arr[i]);
      freqObj[arr[i]]--;
    }
  }
  return newArr;
}

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2));
