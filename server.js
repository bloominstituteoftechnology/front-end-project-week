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
        title: "First Note",
        content: "Morbi pellentesque euismod venenatis, nulla ut nibh nunc. Phasselus diam metus, blandit ac purus a, efficitur mollis _",
    },
    {
        id: 1,
        title: "Second Note",
        content: "Morbi pellentesque euismod venenatis, nulla ut nibh nunc. Phasselus diam metus, blandit ac purus a, efficitur mollis _",
    },
    {
        id: 2,
        title: "Third Note",
        content: "Morbi pellentesque euismod venenatis, nulla ut nibh nunc. Phasselus diam metus, blandit ac purus a, efficitur mollis _",
    },
    {
        id: 3,
        title: "Fourth Note",
        content: "Morbi pellentesque euismod venenatis, nulla ut nibh nunc. Phasselus diam metus, blandit ac purus a, efficitur mollis _",
    },
    {
        id: 4,
        title: "Fifth Note",
        content: "Morbi pellentesque euismod venenatis, nulla ut nibh nunc. Phasselus diam metus, blandit ac purus a, efficitur mollis _",
    },
    {
        id: 5,
        title: "Sixth Note",
        content: "Morbi pellentesque euismod venenatis, nulla ut nibh nunc. Phasselus diam metus, blandit ac purus a, efficitur mollis _",
    },
    {
        id: 6,
        title: "Seventh Note",
        content: "Morbi pellentesque euismod venenatis, nulla ut nibh nunc. Phasselus diam metus, blandit ac purus a, efficitur mollis _",
    },
    {
        id: 7,
        title: "Eigth Note",
        content: "Morbi pellentesque euismod venenatis, nulla ut nibh nunc. Phasselus diam metus, blandit ac purus a, efficitur mollis _",
    },
    {
        id: 8,
        title: "Ninth Note",
        content: "Morbi pellentesque euismod venenatis, nulla ut nibh nunc. Phasselus diam metus, blandit ac purus a, efficitur mollis _",
    }
];
server.get('/notes', (req, res) => {
  res.json(notes);
});
let noteId = 9;

server.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const newNote = { title, content, id: noteId };
  if (!title || !content) {
    return sendUserError(
      'Title and content are all required to create a note in the note DB.',
      res
    );
  }
  const findNoteByTitle = note => {
    return note.title === title;
  };
  if (notes.find(findNoteByTitle)) {
    return sendUserError(
      `${title} already exists in the note DB.`,
      res
    );
  }

  notes.push(newNote);
  noteId++;
  res.json(notes);
});

server.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const findNoteById = note => {
    return note.id == id;
  };
  const foundNote = notes.find(findNoteById);
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
