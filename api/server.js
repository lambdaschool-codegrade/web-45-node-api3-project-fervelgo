const express = require('express');
const { logger } = require('./middleware/middleware')
const userRouter = require('./users/users-router')


const server = express();

server.use(express.json())
server.use('api/users', userRouter)
// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
