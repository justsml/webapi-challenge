// play this: https://www.youtube.com/watch?v=d-diB65scQU

const express = require('express')
const server = express();

module.exports = server

server.use(express.json());

server.get('/', (req, res) => {
  res.status(400).send('?????????')
});

server.post('/', (req, res) => {
  res.status(400).send({message: `TODO: Make route work, see README.md`})
});


