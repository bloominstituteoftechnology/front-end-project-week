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
    noteTitle: 'React Styles',
    noteContent: 'Implement React styling changes'
  }
];
server.get('/notes', (req, res) => {
  res.json(notes);
});
let noteId = 0;

server.post('/notes', (req, res) => {
  const { noteTitle, noteContent } = req.body;
  const newNote = { noteTitle, noteContent, id: noteId };
  if (!noteTitle || !noteContent) {
    return sendUserError(
      'Ya gone did smurfed! Title/Content are all required to create a smurf in the smurf DB.',
      res
    );
  }
  const findNoteByTitle = note => {
    return note.noteTitle === noteTitle;
  };
  if (note.find(findNoteByTitle)) {
    return sendUserError(
      `Ya gone did smurfed! ${noteTitle} already exists in the notes DB.`,
      res
    );
  }

  notes.push(newNote);
  noteId++;
  res.json(notes);
});

server.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { noteTitle, noteContent } = req.body;
  const findNoteById = note => {
    return note.id == id;
  };
  const foundNote = notes.find(findNoteById);
  if (!foundNote) {
    return sendUserError('No Note found by that ID', res);
  } else {
    if (noteTitle) foundNote.noteTitle = noteTitle;
    if (noteContent) foundNote.noteContent = noteContent;
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
    sendUserError('No note by that ID exists in the note DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
