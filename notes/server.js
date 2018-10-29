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

let notes = [
    {
        "tags": ["tag", "otherTag"],
        "title": "Note Title",
        "textBody": "Note Body",
        "id": "cksdkjvckadd32",
      }
];
server.get('/notes', (req, res) => {
  res.json(notes);
});
let notesId = 0;

server.post('/notes', (req, res) => {
  const { tags, title, textBody } = req.body;
  const newNote = { tags, title, textBody, id: notesId };
  if (!tags || !title|| !textBody) {
    return sendUserError(
      'Please put in name, title, content',
      res
    );
  }
  const findNotesByTitle = note => {
    return note.title === title;
  };
  if (notes.find(findNotesByTitle)) {
    return sendUserError(
      `ERROR! ${title} already exists in the notes DB.`,
      res
    );
  }

  notes.push(newNote);
  notesId++;
  res.json(notes);
});

server.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { tags, title, textBody } = req.body;
  const findNotesById = note => {
    return note.id == id;
  };
  const foundNote = notes.find(findNotesById);
  if (!foundNote) {
    return sendUserError('No note found by that ID', res);
  } else {
    if (tags) foundNote.tags = tags;
    if (title) foundNote.title = title;
    if (textBody) foundNote.textBody = textBody;
    res.json(notes);
  }
});

server.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const foundNote=notes.find(note => note.id == id);

  if (foundNote) {
    const NoteRemoved = { ...foundNote};
    notes = notes.filter(note => note.id != id);
    res.status(200).json(notes);
  } else {
    sendUserError('No notes by that ID exists in the notesDB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
