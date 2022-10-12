/*
  ■□ Pattern □■ : Heart

  Task:
  Complete the pattern using the following set of characters: ■, , ◥, ◤, ◣, ◢
  In this kata, we need draw a Heart.
  Rules:
  parameter n The width of heart, an even number, n>=6, the heart's height increases with n, look at example.
  return a string, ■ ◥◤◣◢ represents the heart, and Full width space character pad at heart's left and right side.
  Examples:
  (Please do not mind the black stripes, this is codewars description display effect, not perfect)

*/

// 254

function draw(n) {
  let heart = ('◢' + '■'.repeat(n / 2 - 2) + '◣').repeat(2);

  for (let i = Math.floor(n / 6); i > 0; i--) heart += '\n' + '■'.repeat(n);

  for (let i = 0, m = n / 2; i < m; i++)
    heart += '\n' + ' '.repeat(i) + '◥' + '■'.repeat(n - 2 * i - 2) + '◤' + ' '.repeat(i);

  return heart;
}

console.log(draw(10));
