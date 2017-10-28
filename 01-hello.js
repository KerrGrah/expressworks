//Create an Express.js app that outputs "Hello World!" when somebody goes to /home.

const express = require('express');
    const app = express();

    app.get('/home', (req, res) => {
      res.end('Hello World!');
    })
    app.listen(process.argv[2]);
