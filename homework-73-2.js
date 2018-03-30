const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();

const port = 8001;

const password = '123';

app.get('/', (req, res) => {
  res.send('');
});

app.get('/encrypt/:crypt', (req, res) => {
  res.send(Vigenere.Cipher(password).crypt(`${req.params.crypt}`));
});

app.get('/crypt/:encrypt', (req, res) => {
  res.send(Vigenere.Decipher(password).crypt(`${req.params.encrypt}`));
});

app.listen(port);