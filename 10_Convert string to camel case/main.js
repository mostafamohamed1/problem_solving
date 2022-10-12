/*
  Convert string to camel case

  Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).


  Examples
  "the-stealth-warrior" gets converted to "theStealthWarrior"
  "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
  let test = str.replace(/[-_]/g, '-');
  let result = [];
  for (let i = 1; i < test.split('-').length; i++) {
    if (i == 1) result.push(test.split('-')[0]);
    result.push(test.split('-')[i][0].toUpperCase() + test.split('-')[i].slice(1));
  }
  return result.join('');
}

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));
