const codeBreaker = require('./codeBreaker.js');
describe('Game Logic', () => {
  test('Full match XXXX', () => {
    expect(codeBreaker.check('1234')).toBe('XXXX');
  })

  test('Partial match XXX', () => {
    expect(codeBreaker.check('1235')).toBe('XXX');
  });

  test('Include all numbers', () => {
    expect(codeBreaker.check('4321')).toBe('----');
  });

  test('Include some numbers ---', () => {
    expect(codeBreaker.check('4326')).toBe('---');
  });

  test('No match', () => {
    expect(codeBreaker.check('5678')).toBe('');
  });

  test('Partial match and include some numbers', () => {
    expect(codeBreaker.check('1243')).toBe('XX--');
  })
})

describe('Asserts', () => {
  test('False if user write less than 4 characters', () => {
    expect(codeBreaker.validate('123')).toBe(false)
  })

  test('False if user write more than 4 characters', () => {
    expect(codeBreaker.validate('123')).toBe(false)
  })

  test('True if user write 4 characters', () => {
    expect(codeBreaker.validate('1234')).toBe(true)
  })

  test('False if user write not a number characters', () => {
    expect(codeBreaker.validate('a214')).toBe(false)
  })

})

describe('Update secret', () => {
  test('update secret to ahoter 4 digit number', () => {
    codeBreaker.updateSecret()
    const pattern = /[0-9]{4}$/
    const secret = codeBreaker.getSecret()
    expect(pattern.test(secret)).toBe(true)
  })
})



//TODO: allow the user to enter guess number {API}

//TODO: create get method to update secret number
//TODO: create post method to allow user to 

