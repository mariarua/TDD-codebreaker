const express = require('express');
const cors = require('cors');
const codeBreaker = require('../codeBreaker/codeBreaker.js')

const app = express();

app.use(cors());
app.get('/', (req, res) => {
  res.send(`
  <input type="text" id='input'/>
  <button id='send'>SEND</button>
  <script>
    const btn = document.getElementById('send')
    const input = document.getElementById('input')
    function codeBreaker(value){
      
    }
  </script>
  `);
})

app.post('/codebreaker', (req, res) => {
  const { guess } = req.body
  if (!codeBreaker.validate(guess)) {
    res.status(400).json({
      error: 'Answer with an incorrect format, must be a four digit number'
    })
    return
  }
  const response = codeBreaker.check(guess)
  res.status(200).json({
    res: response
  })
})

app.get('/codebreaker', (req,res)=>{
  codeBreaker.updateSecret()
  const secret = codeBreaker.getSecret()
  res.status(200).json({
    res: 'Secret updated',
    secret 
  })
})

module.exports = app
