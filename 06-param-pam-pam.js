//Create an Express.js server that processes PUT '/message/:id' requests.

const express = require('express');
const crypto = require('crypto');
const app = express();

app.put('/message/:id', (req, res) => {
  let id = req.params.id;
  res.send(crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex'));
});
app.listen(process.argv[2]);
