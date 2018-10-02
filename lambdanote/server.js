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
    title: 'Welcome to Lambda Note!',
    textBody: 'You can take all the notes you like and delete when ready!',
    timeStamp: '*shrug*'
  }
];
server.get('/notes', (req, res) => {
  res.json(notes);
});
let noteId = 1;

server.post('/notes', (req, res) => {
  const { title, textBody, timeStamp } = req.body;
  const newNote = { title, textBody, timeStamp, id: noteId };
  if (!title || !textBody || !timeStamp) {
    return sendUserError(
      'You must enter both a title and content',
      res
    );
  }

  notes.push(newNote);
  noteId++;
  res.json(notes);
});

server.delete('/notes/id', (req, res) => {
  console.log('server fired')
  const { id } = req.params;
  const foundNote = notes.find(note => note.id == id);

  if (foundNote) {
    const NoteRemoved = { ...foundNote };
    notes = notes.filter(note => note.id != id);
    res.status(200).json(notes);
  } else {
    sendUserError('No note by that ID exists in the notes DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
