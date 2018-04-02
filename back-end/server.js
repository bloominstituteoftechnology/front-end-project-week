const express = require('express');

const server = express();
const PORT = 5000;
const STATUS_SUCCESS = 200;
const STATUS_USER_ERROR = 422;

server.use((req, res, next) => {
    next();
});