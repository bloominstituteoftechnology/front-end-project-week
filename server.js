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
  	id: 0,
   //tags: ["tag", "otherTag"],
    title: "Note Title",
    textBody: "Note Body",

  }
];

server.get('/notes', (req, res) => {
  res.json(notes);
});
server.get('/notes/:id', (req, res) => {
	const { id } = req.params;
	res.json(notes[id]);
});

let noteId = 1;

server.post('/notes', (req, res) => {
  const { title, textBody } = req.body;
  const newNote = { title, textBody, id: noteId };
  if (!textBody) {
    return sendUserError(
      'Note cannot be empty',
      res
    );
  }

  notes.push(newNote);
  noteId++;
  res.json(notes);
});

server.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { title, textBody } = req.body;
  const findNoteById = note => {
    return note.id == id;
  };
  const foundNote = notes.find(findNoteById);
  if (!foundNote) {
    return sendUserError('No Note found by that ID', res);
  } else {
    if (title) foundNote.title = title;
    if (textBody) foundNote.textBody = textBody;
    //if (tags) foundNote.tags = tags;
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
    sendUserError('No Note by that ID exists in the Note DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
