const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(bodyParser.json());
server.use(cors());

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
let noteID = 1;

server.get('/notes', (req, res) => {
  res.json(notes);
});

server.get('/notes/:id', (req, res) => {
  const note = notes.filter(note => note.id.toString() === req.params.id)[0];
  res.status(200).json(note);
});

server.post('/notes', (req, res) => {
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
  console.log(`Lambda Notes server is listening on port ${port}`);
});