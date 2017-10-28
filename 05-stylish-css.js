//Style your HTML from previous example with some Stylus middleware.

const express = require('express');
const stylus = require('stylus');
const app = express();

//const path = require('path');
app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3] /* || path.join(__dirname, 'public') */ ));

app.listen(process.argv[2]);
