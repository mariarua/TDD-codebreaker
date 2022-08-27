let secret = '1234';


function validate(guess) {
  const pattern = /[0-9]{4}/
  if (guess.length === 4 && pattern.test(guess)) return true
  return false
}

/**
 * 
 * @param {string} guess 
 * @returns {string} track of the guess
 * @description Add X if the digit is in the same position as the secret number, 
 * - if the digit is in the secret number but not in the same position, 
 * and nothing if the digit is not in the secret number.
 */
function check(guess) {
  let result = '';
  if (secret === guess) return 'XXXX';
  secret.split('').forEach((digit, index) => {
    if (guess[index] === digit) {
      result += 'X';
    } else {
      if (guess.includes(digit)) {
        result += '-';
      }
    }

  });

  return result;
}

function updateSecret() {
  let newSecret = ''
  for (let index = 0; index < 4; index++) {
    const number = parseInt(Math.random() * 9, 10) // 10
    newSecret += String(number)
  }
  secret = newSecret
}

function getSecret() {
  return secret
}


module.exports = {
  check,
  validate,
  updateSecret,
  getSecret
}