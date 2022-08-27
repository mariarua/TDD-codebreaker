const req = require('supertest');
const api = require('./index');

describe('API status response', () => {
  test('return 200 when update secret', (done) => {
    req(api).get('/codebreaker').then(res => {
      expect(res.statusCode).toBe(200)
      done()
    })
  })  
})
