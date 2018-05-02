const express = require('express');
const cors = require('cors');
const port = 2005;

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
  const { title, body } = req.body;
  const newNote= { title, body, id: noteId };
  if (!title || !body) {
    return sendUserError(
      'title and body required, need a shirt AND pants',
      res
    );
  }
  // const findNoteById = notes => {
  //   return notes.id == id;
  // };
  // console.log(notes.id)
//   if (notes
// .find(findNoteById)) {
//     return sendUserError(
//       `find error`,
//       res
//     );
//   }

  notes
.push(newNote);
  noteId++;
  res.json(notes);
});

server.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  const findNoteById = note => {
    return note.id === id;
  };
  const foundNote = notes
.find(findNoteById);
  if (!foundNote) {
    return sendUserError('No note found by the provided ID', res);
  } else {
    if (Title) foundNote.title = title;
    res.json(foundNote);
  }
});

server.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const foundNote = notes
.find(note => note.id == id);

  if (foundNote) {
    const NoteRemoved = { ...foundNote };
    notes
 = notes
.filter(note => note.id != id);
    res.status(200).json({ NoteRemoved });
  } else {
    sendUserError('No note found by provided ID', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
