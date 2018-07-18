const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4444;

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
    title: "Sample note 1",
    textBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae magna nisl. Phasellus sed risus nulla."
  },
  {
    id: 1,
    title: "Sample note 2",
    textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae magna nisl. Phasellus sed risus nulla."
  },
  {
    id: 2,
    title: "Sample note 3",
    textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae magna nisl. Phasellus sed risus nulla."
  },
  {
    id: 3,
    title: "Sample note 4",
    textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae magna nisl. Phasellus sed risus nulla."
  },
  {
    id: 4,
    title: "Sample note",
    textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae magna nisl. Phasellus sed risus nulla."
  }
];

let noteId = 5;

server.get('/notes', (req, res) => {
    res.json(notes);
});

server.get('/notes/:id', (req, res) => {

  if (note = notes.find(f => f.id == req.params.id)) {
    res.status(200).json(note);
  } else {
    res.status(404).send({ msg: 'Note not found' });
  }
});

server.post('/notes', (req, res) => {
  const note = { id: getNoteId(), ...req.body };

  notes = [...notes, note];

  res.send(notes);
});

server.put("/notes/:id", (req, res) => {
  const { id } = req.params;
  const {
    title,
    textBody
  } = req.body;
  const findNoteById = note => {
    return note.id == id;
  };
  const foundNote = notes.find(findNoteById);
  if (!foundNote) {
    return sendUserError("No Note found by that ID", res);
  } else {
    if (title) foundNote.title = title;
    if (textBody) foundNote.textBody = textBody;
    res.json(notes);
  }
});

server.delete('/notes/:id', (req, res) => {
  const { id } = req.params;

  notes = notes.filter(f => f.id !== Number(id));

  res.send(notes);
});

function getNoteId() {
  return noteId++;
}

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});