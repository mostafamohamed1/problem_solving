/*
  Simple decrypt algo

  You'll be given a string of random characters (numbers, letters, and symbols). To decode this string into the key we're searching for:
  (1) count the number occurences of each ascii lowercase letter, and
  (2) return an ordered string, 26 places long, corresponding to the number of occurences for each corresponding letter in the alphabet.

  For example:

  '$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
    ^    ^   ^  ^  ^         ^^^  ^                   ^
  [4]  [3] [2][3][1]        abc  f                   z
  
  'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
  ^  ^   ^   ^                    ^ ^ ^                    ^
  [1][3] [3] [3]                   a c e                    z

*/

// Solution #1
function decrypt(encryption) {
  let Alfa = {};
  let encArr = encryption.split('');
  let decrypt = [];
  for (let i = 0; i < encArr.length; i++) {
    if (encArr[i].charCodeAt(0) >= 97 && encArr[i].charCodeAt(0) <= 122) {
      if (!Alfa[encArr[i]]) Alfa[encArr[i]] = 0;
      Alfa[encArr[i]]++;
    }
  }

  for (let i = 97; i <= 122; i++) {
    if (Alfa[String.fromCharCode(i)]) {
      decrypt.push(Alfa[String.fromCharCode(i)]);
    } else {
      decrypt.push(0);
    }
  }

  return decrypt.join('');
}

console.log(decrypt('$aaaa#bbb*ccfff!z'));
console.log(decrypt('z$aaa#ccc%eee123456789'));

// Solution #2
function decrypt2(encryption) {
  let asciiLowerCase = 'abcdefghijklmnopqrstuvwxyz';
  let res = '';
  for (const letter of asciiLowerCase) {
    res += encryption.split(letter).length - 1;
  }
  return res;
}

console.log(decrypt2('$aaaa#bbb*ccfff!z'));
console.log(decrypt2('z$aaa#ccc%eee123456789'));
