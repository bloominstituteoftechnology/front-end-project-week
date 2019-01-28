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

let notes = [];
server.get('/notes', (req, res) => {
  res.json(notes);
});
let noteId = 0;

server.get('/notes/:id', (req, res) => {
  const note = notes.filter(note => note.id == req.params.id)[0];
  res.status(200).json([note]);
})

server.post('/notes', (req, res) => {
  const { name, body } = req.body;
  const newNote = { name, body, id: noteId };
  if (!name || !body) {
    return sendUserError(
      'Ya gone did Noteed! Name/body are both required to create a Note in the Note DB.',
      res
    );
  }

  notes.push(newNote);
  noteId++;
  res.json(notes);
});

server.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { name, body } = req.body;
  const findNoteById = note => {
    return note.id == id;
  };
  const foundNote = notes.find(findNoteById);
  if (!foundNote) {
    return sendUserError('No Note found by that ID', res);
  } else {
    if (name) foundNote.name = name;
    if (body) foundNote.body = body;
    res.json(notes);
  }
});

server.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const foundNote = notes.find(note => note.id == id);

  if (foundNote) {
    const noteRemoved = { ...foundNote };
    notes = notes.filter(note => note.id != id);
    res.status(200)
    res.json(notes);
  } else {
    sendUserError('No Note by that ID exists in the Note DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});