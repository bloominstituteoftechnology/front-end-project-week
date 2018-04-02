const express = require('express');

const server = express();
const port = process.env.PORT || 5000;

server.get('/home', (req, res) => {
  res.send({ express: 'Page Test' });
});

server.listen(port, () => console.log(`Listening on port ${port}`));