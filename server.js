const express = require('express');

// const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.get('/', (req, res) => {
    res.send(`<h2>:)</h2>`);
  });


server.use(express.json());
// server.use('/api/schemes', SchemeRouter);

module.exports = server;