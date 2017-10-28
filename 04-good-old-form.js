//Write a route ('/form') that processes HTML form input (<form><input name="str"/></form>) and prints backwards the str value.

const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
  // res.end or res.send
  res.end(req.body.str.split('').reverse().join(''));

})
app.listen(process.argv[2]);
