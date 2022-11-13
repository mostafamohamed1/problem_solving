/*
  - Arrays Similar
  Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.
*/

function arraysSimilar(arr1, arr2) {
  if (arr1.length != arr2.length) return false;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let index = 0;
  while (index < arr1.length) {
    if (arr1[index] === arr2[index]) {
      index++;
      continue;
    } else {
      return false;
    }
  }
  return true;
}

const arr1 = [1, 2, 2, 3, 4],
  arr2 = [2, 1, 2, 4, 3],
  arr3 = [1, 2, 3, 4],
  arr4 = [1, 2, 3, "4"];

console.log(arraysSimilar(arr2, arr3));

function arraysSimilar2(arr1, arr2) {
  return (
    JSON.stringify(arr1.slice().sort()) === JSON.stringify(arr2.slice().sort())
  );
}

console.log(arraysSimilar2(arr2, arr3));
