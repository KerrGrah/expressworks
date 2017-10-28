//Write a server that reads a file, parses it to JSON and outputs the content to the user.

// first attempt without error handling ...
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/books', (req, res) => {
  fs.readFile(process.argv[3], (err, data) => {
    let parsedFile = JSON.parse(data);
    res.json(parsedFile);
  });
})
app.listen(process.argv[2]);

// second with error handling!
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/books', (req, res) => {
  fs.readFile(process.argv[3], (err, data) => {
    if (err) {
      return res.status(500).json({error: err});
    }
    let parsedFile = {};
    try {
      parsedFile = JSON.parse(data);
    } catch (err) {
      return res.status(500).json({error: err});
    }
    res.json(parsedFile);
  });
})
app.listen(process.argv[2]);
