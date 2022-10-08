/*
  Scramblies


  Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

  Notes:

  Only lower case letters will be used (a-z). No punctuation or digits will be included.
  Performance needs to be considered.
  Examples
  scramble('rkqodlw', 'world') ==> True
  scramble('cedewaraaossoqqyt', 'codewars') ==> True
  scramble('katas', 'steak') ==> False
*/

function scramble(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (!obj1[str1[i]]) obj1[str1[i]] = 0;
    obj1[str1[i]]++;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!obj2[str2[i]]) obj2[str2[i]] = 0;
    obj2[str2[i]]++;
  }

  for (let i = 0; i < Object.keys(obj2).length; i++) {
    let key = Object.keys(obj2)[i];
    // console.log(Object.keys(obj1).includes(key));
    // console.log(obj1[key], obj2[key]);
    if (!Object.keys(obj1).includes(key) || obj1[key] < obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(scramble('rkqodlw', 'world')); //t
console.log(scramble('cedewaraaossoqqyt', 'codewars')); //t
console.log(scramble('katas', 'steak')); //f
console.log(scramble('scriptjavx', 'javascript')); //f
console.log(scramble('scriptingjava', 'javascript')); //f
console.log(scramble('scriptsjava', 'javascripts')); //t
console.log(scramble('javscripts', 'javascript')); //t
console.log(scramble('jscripts', 'javascript')); //f
console.log(scramble('aabbcamaomsccdd', 'commas')); //f
console.log(scramble('commas', 'commas')); //t
console.log(scramble('sammoc', 'commas')); //t
