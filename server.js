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
	title: 'Hello',
	text: 'This is the first note.'
    }
];
server.get('/notes', (req, res) => {
    res.json(notes);
});
let noteId = 1;

server.post('/notes', (req, res) => {
    const { title, text } = req.body;
  const newNote = { title, text, id: noteId };
  if (!title || !text) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    );
  }
  const findNoteByTitle = note => {
    return note.title === title;
  };
  if (notes.find(findNoteByTitle)) {
    return sendUserError(
      `Ya gone did smurfed! ${title} already exists in the smurf DB.`,
      res
    );
  }

  notes.push(newNote);
  noteId++;
  res.json(notes);
});

server.put('/notes/:id', (req, res) => {
  const { id } = req.params;
    const { title, text } = req.body;
  const findNoteById = note => {
    return note.id == id;
  };
  const foundNote = notes.find(findNoteById);
  if (!foundNote) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (title) foundNote.title = title;
    if (text) foundNote.text = text;
    res.json(notes);
  }
});

server.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const foundNote = notes.find(note => note.id == id);

  if (foundNote) {
    const NoteRemoved = { ...foundNote };
    notes = notes.filter(note => note.id != id);
    res.status(200).json(notes);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
