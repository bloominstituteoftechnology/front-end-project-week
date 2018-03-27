const express = require('express');
const cors = require('cors');
const port = 5000;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let nextId = 0;

const gen = () => {
  const res = [];
  for (let i = 0; i < 10; i++) {
    nextId++;
    res.push({
      id: nextId, title: `This is a title for ${i + 1}`, content: `Lorem Ipsum is simply dummy
    text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer
     took a galley of type and scrambled it to make a type specimen book.`});
  }
  return res;
}

const notes = gen();

server.get('/notes', (req, res) => {
  res.json(notes);
});
server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});