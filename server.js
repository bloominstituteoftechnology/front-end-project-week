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
    title: "Lambda Notes",
    content: "This app will work!"
  }
];

server.get('/notes', (req, res) => {
  res.json(notes);
});
let noteId = 1;

server.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const newnote = { title, content, id: noteId };
  if (!title || !content) {
    return sendUserError(
      'Ya gone did noteed! title & content are all required to create a note in the note DB.',
      res
    );
  }
  const findnoteByTitle = note => {
    return note.title === title;
  };
  if (notes.find(findnoteByTitle)) {
    return sendUserError(
      `Ya gone did noteed! ${title} already exists in the note DB.`,
      res
    );
  }

  notes.push(newnote);
  noteId++;
  res.json(notes);
});

server.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const findnoteById = note => {
    return note.id == id;
  };
  const foundnote = notes.find(findnoteById);
  if (!foundnote) {
    return sendUserError('No note found by that ID', res);
  } else {
    if (title) foundnote.title = title;
    if (content) foundnote.content = content;
    res.json(notes);
  }
});

server.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const foundnote = notes.find(note => note.id == id);

  if (foundnote) {
    const noteRemoved = { ...foundnote };
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