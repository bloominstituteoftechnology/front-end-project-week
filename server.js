const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let notes = [];
server.get('/notes', (req, res) => {
  res.json(notes);
});
let noteId = 0;

server.post('/notes', (req, res) => {
  const { title, body } = req.body;
  const newNote = { title, body, id: noteId };
  if (!title || !body) {
    return sendUserError(
      'Title and Body both required of new note',
      res
    );
  }
  const findNoteByTitle = note => {
    return note.title === title;
  };
  if (notes.find(findNoteByTitle)) {
    return sendUserError(
      `${title} already exists in the DB.`,
      res
    );
  }

  notes.push(newNote);
  noteId++;
  res.json(notes);
});

server.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  const findNoteById = note => {
    return note.id == id;
  };
  const foundNote = notes.find(findNoteById);
  if (!foundNote) {
    return sendUserError('No note found by that ID', res);
  } else {
    if (title) foundNote.title = title;
    if (body) foundNote.body = body;
    res.json(foundNote);
  }
});

server.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const foundNote = notes.find(note => note.id == id);

  if (foundNote) {
    const NoteRemoved = { ...foundNote };
    notes = notes.filter(note => note.id != id);
    res.status(200).json({ NoteRemoved });
  } else {
    sendUserError('No note by that ID exists in the note DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
