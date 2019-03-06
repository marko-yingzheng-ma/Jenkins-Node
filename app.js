const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Hello Express');
});

app.get('/api', function(req, res) {
  res.json({ name: 'Marko', age: 25 });
});

app.get('/person/:name', function(req, res) {
  const name = req.params['name'];
  res.send(`Hello ${name}`);
});

app.listen(port);