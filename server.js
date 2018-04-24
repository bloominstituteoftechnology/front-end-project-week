const express = require('express');
const bodyParser = require('body-parser');
const port = 3333;

const server = express();
server.use(bodyParser.json());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let notes = [
  {
    id: 0,
    title: 'A Test Note',
    content: 'The notes contents go here!'
  }
];
server.get('/Notes', (req, res) => {
  res.json(notes);
});
let noteID = 1;

server.post('/Notes', (req, res) => {
  const { title, content } = req.body;
  const newNote = { title, content, id: noteID };
  if(!title || !content) {
    return sendUserError(
      'A note requires a title and content.',
      res
    );
  }

  notes.push(newNote);
  noteID++;
  res.json(notes);
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});