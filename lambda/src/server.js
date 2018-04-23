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
let NoteID = 0;

server.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const newNote = { title, content, id: NoteId };
  if (!title || !content) {
    return sendUserError(
      'Title/Content are all required to create a note in the note DB.',
      res
    );
  }
  const findNote = title => {
    return note.title === title;
  };
  if (notes.find(findNotebyTitle)) {
    return sendUserError(
      `${title} already exists in the note DB.`,
      res
    );
  }

  notes.push(newNote);
  NoteId++;
  res.json(notes);
});

server.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const findNotebyTitle = smurf => {
    return smurf.id == id;
  };
  const foundNote = notes.find(findNotebyTitle);
  if (!foundNote) {
    return sendUserError('No Note found by that ID', res);
  } else {
    if (title) foundNote.title = title;
    if (content) foundNote.content = content;
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