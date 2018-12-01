const express = require('express');
const cors = require('cors');
const port = 3000;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let notes = [
  {
    id: 0,
    "tags": ["tag", "otherTag"],
    "title": "Note Title",
    "textBody": "Note Body",
  }
];
server.get('/note/get/all', (req, res) => {
  res.json(notes);
});

server.get('/note/get/:id', (req, res) => {
  const { id } = req.params;
  const findNoteById = note => {
    if (note.id === id) return note;
  };
  const foundNote = notes.find(findNoteById);
  if (!foundNote) {
    return sendUserError('No Note found by that ID', res);
  } else {
    res.json(foundNote);
  }
});

server.post('/note/create', (req, res) => {
  const { tags, title, textBody } = req.body;
  let noteId

  if (notes.length === 0) {
    noteId = 0
  } else {
    noteId = notes[notes.length - 1].id + 1
  }

  const newNote = { tags, title, textBody, id: noteId };
  if ( !title || !textBody ) {
    return sendUserError(
      'Error creating note.',
      res
    );
  }

  notes.push(newNote);
  res.json(notes);
});

server.put('/note/edit/:id', (req, res) => {
  const { id } = req.params;
  const { tags, title, textBody } = req.body;
  const findNoteById = note => {
    return note.id === id;
  };
  const foundNote = notes.find(findNoteById);
  if (!foundNote) {
    return sendUserError('No Note found by that ID', res);
  } else {
    if (tags.length > 0) foundNote.tags = tags;
    if (title) foundNote.title = title;
    if (textBody) foundNote.textBody = textBody;
    res.json(notes);
  }
});

server.delete('/note/delete/:id', (req, res) => {
  const { id } = req.params;
  const foundNote = notes.find(note => note.id === id);

  if (foundNote) {
    notes = notes.filter(note => note.id !== id);
    res.status(200).json(notes);
  } else {
    sendUserError('No note by that ID exists in the note DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});