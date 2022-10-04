/*
  The search for Primes! Twin Primes!

  A twin prime is a prime number that is either 2 less or 2 more than another prime number—for example, either member of the twin prime pair (41, 43). In other words, a twin prime is a prime that has a prime gap of two. Sometimes the term twin prime is used for a pair of twin primes; an alternative name for this is prime twin or prime pair. (from wiki https://en.wikipedia.org/wiki/Twin_prime)

  Your mission, should you choose to accept it, is to write a function that counts the number of sets of twin primes from 1 to n.

  If n is wrapped by twin primes (n-1 == prime && n+1 == prime) then that should also count even though n+1 is outside the range.

  Ex n = 10

  Twin Primes are (3,5) (5,7) so your function should return 2!

  Tests
    assert.equal(twinPrime(-25), 0);
    assert.equal(twinPrime(0), 0);
    assert.equal(twinPrime(1), 0);
    assert.equal(twinPrime(2), 0);
    assert.equal(twinPrime(10), 2);
    assert.equal(twinPrime(11), 2);
    assert.equal(twinPrime(12), 3);
    assert.equal(twinPrime(15), 3);
    assert.equal(twinPrime(25), 4);

*/

function twinPrime(n) {
  const pNumbers = [];

  const isPrime = (n) => {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i <= n + 1; i++) {
    if (isPrime(i)) {
      pNumbers.push(i);
    }
  }

  return pNumbers.reduce((acc, p, i) => {
    if (pNumbers[i + 1] !== undefined && Math.abs(p - pNumbers[i + 1]) === 2) {
      acc++;
    }
    return acc;
  }, 0);
}

console.log(twinPrime(-25));
console.log(twinPrime(0));
console.log(twinPrime(1));
console.log(twinPrime(2));
console.log(twinPrime(10));
console.log(twinPrime(11));
console.log(twinPrime(12));
console.log(twinPrime(15));
console.log(twinPrime(25));
