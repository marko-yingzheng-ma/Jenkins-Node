const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
  console.log(`Request Url: ${ req.url }`);
  next();
});

app.get('/', function(req, res) {
  res.send('<html><head><link href=assets/styles.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/api', function(req, res) {
  res.json({ name: 'Marko', age: 25 });
});

app.get('/person/:name', function(req, res) {
  const name = req.params['name'];
  res.send(`Hello ${name}`);
});

app.listen(port);