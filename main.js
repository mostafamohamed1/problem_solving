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

// =========================================================================================
/*
The highest profit wins!

  Story
  Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.


  Task
  Write a function that returns both the minimum and maximum number of the given list/array.

  Examples (Input --> Output)
    [1,2,3,4,5] --> [1,5]
    [2334454,5] --> [5,2334454]
    [1]         --> [1,1]
*/

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5]));

// =========================================================================================
/*
Find the next perfect square!

  You might know some pretty large perfect squares. But what about the NEXT one?
  Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
  If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
  Examples:(Input --> Output)

  121 --> 144
  625 --> 676
  114 --> -1 since 114 is not a perfect square

*/

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let isIntegerNumber = Math.sqrt(sq) % 1 === 0;
  if (isIntegerNumber) {
    return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1);
  }
  return -1;
}

console.log(findNextSquare(114));

// =========================================================================================
/*
Removing Elements

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

*/

function removeEveryOther(arr) {
  return arr.filter((el, i) => (i + 1) % 2 != 0);
}

console.log(removeEveryOther(['keep', 'remove', 'keep', 'remove']));

// =========================================================================================

/*
Find the stray number
You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
The input array will always be valid! (odd-length >= 3)

Examples
  [1, 1, 2] ==> 2
  [17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
  return numbers.filter(
    (el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el),
  )[0];
}

console.log(stray([1, 1, 2]));

// =========================================================================================
/*
Mexican Wave
  Task
  In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

  Rules
  1.  The input string will always be lower case but maybe empty.
  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

*/

function wave(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let result = '';
    if (str[i] != ' ') {
      for (let k = 0; k < str.length; k++) {
        if (k == i) {
          result += str[k].toUpperCase();
        } else {
          result += str[k];
        }
      }
    } else {
      continue;
    }

    arr.push(result);
  }
  return arr;
}

function wave2(str) {
  return [...str]
    .map((el, i) => str.slice(0, i) + el.toUpperCase() + str.slice(i + 1))
    .filter((el) => el != str);
}

console.log(wave2('hello world'));

// =========================================================================================

/*
  Correct the mistakes of the character recognition software
  Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

  When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

  Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

  S is misinterpreted as 5
  O is misinterpreted as 0
  I is misinterpreted as 1
  The test cases contain numbers only by mistake.

*/

function correct(string) {
  return string
    .replace(/(?:0)/g, 'O')
    .replace(/(?:1)/g, 'I')
    .replace(/(?:5)/g, 'S');
}

function correct2(s) {
  return [...s].map((e) => ({ 0: 'O', 1: 'I', 5: 'S' }[e] || e)).join('');
}

console.log(correct2('L0ND0N'));
// =========================================================================================
/*
  Find the first non-consecutive number


  Your task is to find the first element of an array that is not consecutive.
  By not consecutive we mean not exactly 1 larger than the previous element of the array.
  E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

  If the whole array is consecutive then return null2.

  The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
*/

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) continue;
    if (arr[i - 1] + 1 === arr[i]) continue;
    else return arr[i];
  }
  return null;
}

console.log(firstNonConsecutive([10, 11, 12, 13, 14, 15, 16]));

// =========================================================================================

/*
  factorial of 5
  1  * 1  = 1
  1  * 2  = 2
  2  * 3  = 6
  6  * 4  = 24
  24 * 5  = 120

*/
function factorial(x) {
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

console.log(factorial(5));

// =========================================================================================
/*
Break camelCase

  Complete the solution so that the function will break up camel casing, using a space between words.

  Example
  "camelCasing"  =>  "camel Casing"
  "identifier"   =>  "identifier"
  ""             =>  ""
*/

// Solution 1
function solution(s) {
  let arr = [];
  let word = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      arr.push(word);
      word = '';
    }
    word += s[i];
    if (s.length - 1 == i) {
      arr.push(word);
    }
  }
  return arr.join(' ');
}

// Solution 2
function solution2(s) {
  return s.replace(/([A-Z])/g, ' $1');
}

// Solution 3
function solution3(s) {
  return [...s].reduce(
    (acc, cur) =>
      cur === cur.toUpperCase() ? (acc += ' ' + cur) : (acc += cur),
    '',
  );
}

console.log(solution3('camelCaseWord'));

// =========================================================================================
/*
Testing 1-2-3

  Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
  Write a function which takes a list of strings and returns each line prepended by the correct number.
  The numbering starts at 1. The format is n: string. Notice the colon and space in between.

  Examples: (Input --> Output)
  [] --> []
  ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

var number = function (array) {
  return array.map((el, i) => `${i + 1}: ${el}`);
};

console.log(number(['a', 'b', 'c']));

// =========================================================================================
/*
Grasshopper - Check for factor

This function should test if the factor is a factor of base.
Return true if it is a factor or false if it is not.

  About factors
  Factors are numbers you can multiply together to get another number.

  2 and 3 are factors of 6 because: 2 * 3 = 6

  You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
  You can use the mod operator (%) in most languages to check for a remainder
  For example 2 is not a factor of 7 because: 7 % 2 = 1

  Note: base is a non-negative number, factor is a positive number.
  */

function checkForFactor(base, factor) {
  return base % factor === 0;
}

console.log(checkForFactor(10, 2));

// =========================================================================================
/*
Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

  #Examples:

  Kata.getMiddle("test") should return "es"
  Kata.getMiddle("testing") should return "t"
  Kata.getMiddle("middle") should return "dd"
  Kata.getMiddle("A") should return "A"

  */

function getMiddle(s) {
  let oddOrEven = s.length % 2;
  let length = Math.floor(s.length / 2);
  return oddOrEven === 0 ? s[length - 1] + s[length] : s[length];
}

console.log(getMiddle('testing'));
console.log(getMiddle('test'));
console.log(getMiddle('middle'));

// =========================================================================================

/*
  Welcome

  Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

  The Task
  Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
  Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
  
  The Database

  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
*/

let data = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso',
};

function greet(language) {
  return data[language] || data['english'];
}

console.log(greet('english'));
console.log(greet('IP_ADDRESS_INVALID'));

// =========================================================================================

/*
  Who likes it?

  You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

  Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

  []                                -->  "no one likes this"
  ["Peter"]                         -->  "Peter likes this"
  ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
  ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
  ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

// Solution 1
function likes(names) {
  return names.length == 0
    ? 'no one likes this'
    : names.length == 1
    ? `${names[0]} likes this`
    : names.length == 2
    ? `${names[0]} and ${names[1]} like this`
    : names.length == 3
    ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

// Solution 2
function likes2(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

// =========================================================================================
/*
Count the divisors of a number

  Count the number of divisors of a positive integer n.

  Random tests go up to n = 500000.

  Examples (input --> output)

  4 --> 3 (1, 2, 4)
  5 --> 2 (1, 5)
  12 --> 6 (1, 2, 3, 4, 6, 12)
  30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  return count;
}

function getDivisorsCnt2(n, i = 1, count = 0) {
  if (i <= n) {
    if (n % i == 0) {
      return getDivisorsCnt2(n, i + 1, (count += 1));
    }
    return getDivisorsCnt2(n, i + 1, count);
  } else {
    return count;
  }
}

console.log(getDivisorsCnt2(30));

// =========================================================================================
/*
  Sum of two lowest positive integers

  Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

  For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

  [10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

function sumTwoSmallestNumbers(numbers) {
  let [one, two] = numbers.sort((a, b) => a - b);
  return one + two;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

// =========================================================================================
/*
Permutations

  In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

  Examples:
  * With input 'a'
  * Your function should return: ['a']
  * With input 'ab'
  * Your function should return ['ab', 'ba']
  * With input 'aabb'
  * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
  * 
"aabb" ,"baab" ,"abab" ,"abba" ,"baba" ,"bbaa"
*/

/*


*/

function permutations(string) {
  let perms = string.split('').reduce((acc, element) => {
    let updatedPerms = new Set();
    acc.forEach((word) => {
      for (let i = 0; i <= word.length; i++) {
        updatedPerms.add(word.substring(0, i) + element + word.substring(i));
      }
    });
    return updatedPerms;
  }, new Set(['']));

  return [...perms];
}

console.log(permutations('aabb'));

function getPermutations(str) {
  let output = [];
  const swapInPlace = (arrToSwap, iA, iB) => {
    [arrToSwap[iB], arrToSwap[iA]] = [arrToSwap[iA], arrToSwap[iB]];
  };

  const generate = (n, heapArr) => {
    if (n == 1) {
      output.push(heapArr.slice());
      return;
    }

    generate(n - 1, heapArr);
    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }
      generate(n - 1, heapArr);
    }
  };

  generate(str.length, [...str].slice());
  return [...new Set(output.map((el) => el.join('')))].sort();
}

console.log(getPermutations('aabb'));

// =========================================================================================

/*
  Write Your Code Here to Make Condition Evaluate True
*/

// let a = {
//   i: 1,
//   valueOf: function () {
//     return a.i++;
//   },
// };

// if (a == 1 && a == 2 && a == 3) {
//   console.log('TRUE');
// }

// let a = 1;

// with ({
//   get a() {
//     return a++;
//   },
// }) {
//   if (a == 1 && a == 2 && a == 3) console.log('Bla');
// }

// let a = '123'.match(/[123]/g);

// if (a == 1 && a == 2 && a == 3) console.log('Bla');

const a = {
  i: 1,
  [Symbol.toPrimitive]() {
    return this.i++;
  },
};

if (a == 1 && a == 2 && a == 3) console.log('Bla');

// =========================================================================================

/*
  Range Extraction
  A format for expressing an ordered list of integers is to use a comma separated list of either

  individual integers
  or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
  Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
  
  Example:

  solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
  returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

*/

function solutionRange(list) {
  let result = [];
  let rangedObj = {};
  let indx = 0;
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] + 1 === list[i + 1]) {
      count++;
    } else {
      rangedObj[++indx] = list.slice(i - count, i + 1);
      count = 0;
    }
  }

  for (let [key, val] of Object.entries(rangedObj)) {
    if (val.length <= 1) {
      result.push(`${val}`);
    } else if (val.length <= 2) {
      result.push(`${val[0]}`, `${val[1]}`);
    } else {
      result.push(`${val[0]}-${val[val.length - 1]}`);
    }
  }

  return result.join();
}

console.log(
  solutionRange([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ]),
);

// =========================================================================================
/*
Smallest possible sum

  Description
  Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

  if X[i] > X[j] then X[i] = X[i] - X[j]

  When no more transformations are possible, return its sum ("smallest possible sum").

  For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

  X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
  X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
  X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
  X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
  X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3

  The returning output is the sum of the final transformation (here 9).

  Example
  solution([6, 9, 21]) #-> 9

  Solution steps:
  [6, 9, 12] #-> X[2] = 21 - 9
  [6, 9, 6] #-> X[2] = 12 - 6
  [6, 3, 6] #-> X[1] = 9 - 6
  [6, 3, 3] #-> X[2] = 6 - 3
  [3, 3, 3] #-> X[1] = 6 - 3

*/

function smallestPossibleSum(numbers) {
  let len = numbers.length - 1; // 2
  let i = len; // 2
  while (true) {
    let a = Math.max(...numbers), // 12 2
      b = numbers[i]; // 12 2
    if (a === b) {
      // true
      if (i == 0) {
        // false
        return numbers.reduce((a, b) => {
          return a + b;
        });
      } else i--;
    } else {
      numbers.splice(numbers.indexOf(a), 1, a - b);
      i = len;
    }
  }
}

console.log(smallestPossibleSum([6, 9, 12]));

const gcd = (a, b) => (a ? gcd(b % a, a) : b);

function smallestSum(numbers) {
  return numbers.reduce(gcd) * numbers.length;
}

console.log(smallestSum([6, 9, 12]));

// =========================================================================================
/*
Counting Change Combinations
  Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

  1+1+1+1, 1+1+2, 2+2.
  The order of coins does not matter:
  1+1+2 == 2+1+1

  Also, assume that you have an infinite amount of coins.
  Your function should take an amount to change and an array of unique denominations for the coins:

    countChange(4, [1,2]) // => 3
    countChange(10, [5,2,3]) // => 4
    countChange(11, [5,7]) //  => 0
*/

var countChange = function (money, coins) {
  if (money < 0 || coins.length === 0) return 0;
  else if (money === 0) return 1;
  else
    return (
      countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
    );
};

console.log(countChange(4, [1, 2]));

var countChange2 = function (money, coins) {
  var arr = new Array(money + 1).fill(0);
  arr[0] = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = coins[i]; j <= money; j++) arr[j] += arr[j - coins[i]];
  }
  return arr[money];
};

console.log(countChange2(4, [1, 2]));

// =========================================================================================
/*
Find the odd int

  Given an array of integers, find the one that appears an odd number of times.
  
  There will always be only one integer that appears an odd number of times.

  Examples
  [7] should return 7, because it occurs 1 time (which is odd).
  [0] should return 0, because it occurs 1 time (which is odd).
  [1,1,2] should return 2, because it occurs 1 time (which is odd).
  [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
  [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

function findOdd(A) {
  return +Object.entries(
    A.reduce((acc, cur) => {
      acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
      return acc;
    }, {}),
  ).filter(([a, b]) => b % 2)[0][0];
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

function findOdd2(A) {
  return A.reduce((a, b) => a ^ b, 0);
}

console.log(findOdd2([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// =========================================================================================
/*
Length of Last Word

  Given a string s consisting of words and spaces, return the length of the last word in the string.
  A word is a maximal substring consisting of non-space characters only.


  Example 1:

  Input: s = "Hello World"
  Output: 5
  Explanation: The last word is "World" with length 5.
  Example 2:

  Input: s = "   fly me   to   the moon  "
  Output: 4
  Explanation: The last word is "moon" with length 4.
  Example 3:

  Input: s = "luffy is still joyboy"
  Output: 6
  Explanation: The last word is "joyboy" with length 6.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trim().split(' ')[s.trim().split(' ').length - 1].length;
};

console.log(lengthOfLastWord('   fly me   to   the moon  '));

// =========================================================================================
/*
Remove Duplicates from Sorted Array

  Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

  Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

  Return k after placing the final result in the first k slots of nums.

  Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.


  Example 1:

  Input: nums = [1,1,2]
  Output: 2, nums = [1,2,_]
  Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
  It does not matter what you leave beyond the returned k (hence they are underscores).
*/

var removeDuplicates = function (nums) {
  return nums.filter((el, i, arr) => arr.indexOf(el) == i);
};

console.log(removeDuplicates([1, 1, 2]));

// =========================================================================================
/*
  Merge Sorted Array

  You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

  Merge nums1 and nums2 into a single array sorted in non-decreasing order.

  The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

  Example 1:

  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  Output: [1,2,2,3,5,6]
  Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
  The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
  Example 2:

  Input: nums1 = [1], m = 1, nums2 = [], n = 0
  Output: [1]
  Explanation: The arrays we are merging are [1] and [].
  The result of the merge is [1].
  Example 3:

  Input: nums1 = [0], m = 0, nums2 = [1], n = 1
  Output: [1]
  Explanation: The arrays we are merging are [] and [1].
  The result of the merge is [1].
  Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/

// 51% Faster Than Other Solution
var merge = function (nums1, m, nums2, n) {
  nums2.filter((el) => el != 0);
  nums2.length = n;
  for (let i = 0; i < m + n; i++) {
    if (nums1[i] == 0) {
      if (nums2.length == 0) return nums1.sort((a, b) => a - b);
      else {
        nums1[i] = nums2.pop();
      }
    }
  }
  return nums1.sort((a, b) => a - b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// 84% Faster Than Other Solution

let merge2 = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }
  return nums1.sort((a, b) => a - b);
};

console.log(merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
