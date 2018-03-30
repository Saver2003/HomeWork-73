const express = require('express');

const app = express();

const port = 8000;

app.get('/', (req, res) => {
  res.send('')
});

app.get('/:word', (req, res) => {
  res.send(`${req.params.word}`)
});

app.listen(port);