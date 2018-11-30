const express = require('express');
const cors = require('cors');
const port = 3002;

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
  "id": 0
}
];
server.get('/note/get/all', (req, res) => {
  res.json(notes);
});

server.get("/note/get/:id", (req, res) => {
 res.json(notes)
 const id = req.params
 const { title, tags, textBody} = req.body
 const findNoteById = note => {
  if (note.id === id) {return note}
  else {
   return sendUserError('No Note!')
  }
 }
 const foundNote = notes.find(findNoteById)
 if (!foundNote) {
  return sendUserError('No Note!')
 }
 else {
  res.json(foundNote)
 }
})

server.post('/note/create', (req, res) => {
  const { tags, title, textBody } = req.body;
  let noteId

  if (notes.length === 0) {
    noteId = 0
  } else {
    noteId = notes[notes.length - 1].id + 1
  }

  const newNote = { tags, title, textBody, id: noteId };
  if (!title || !textBody) {
    return sendUserError(
      'Error! Title/TextBody are all required to create a note in the note DB.',
      res
    );
  }
  notes.push(newNote);
  res.json(notes);
});

server.put('/notes/edit/:id', (req, res) => {
  const { id } = req.params;
  const { title, tags, textBody } = req.body;
  const findNoteByTitle = note => {
    return note.id === id;
  };
  const foundNote = notes.find(findNoteByTitle);
  if (!foundNote) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (title) foundNote.title = title;
    if (tags.length > 0) foundNote.tags = tags ;
    if (textBody) foundNote.textBody = textBody;
    res.json(notes);
  }
});

server.delete('/notes/delete:id', (req, res) => {
  const { id } = req.params;
  const foundNote = notes.find(note => note.id === id);

  if (foundNote) {
    const NoteRemoved = { ...foundNote };
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