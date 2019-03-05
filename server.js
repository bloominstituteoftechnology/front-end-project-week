const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
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
  const { tags, _id, title, textBody } = req.body;
  const newNote = { tags, _id, title, textBody, _id: noteId };
  if (!_id || !title || !textBody) {
    return sendUserError(
      'Error! ID/Title/Content are all required to create a note in the note DB.',
      res
    );
  }
  const findNoteByName = note => {
    return note._id === _id;
  };
  if (notes.find(findNoteByName)) {
    return sendUserError(
      `Error! ${_id} already exists in the note DB.`,
      res
    );
  }

  notes.push(newNote);
  noteId++;
  res.json(notes);
});

server.put('/notes/:_id', (req, res) => {
  const { _id } = req.params;
  const { tags, _id, title, textBody } = req.body;
  const findNoteById = note => {
    return note._id == _id;
  };
  const foundNote = notes.find(findNoteById);
  if (!foundNote) {
    return sendUserError('No Note found by that ID', res);
  } else {
    if (tags) foundNote.tags = tags;
    if (_id) foundNote._id = _id;
    if (title) foundNote.title = title;
    if (textBody) foundNote.textBody = textBody;
    res.json(notes);
  }
});

server.delete('/notes/:_id', (req, res) => {
  const { _id } = req.params;
  const foundNote = notes.find(note => note._id == _id);

  if (foundNote) {
    const NoteRemoved = { ...foundNote };
    notes = notes.filter(note => note._id != _id);
    res.status(200).json(notes);
  } else {
    sendUserError('No note by that ID exists in the note DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
