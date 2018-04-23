const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3773;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (message, response) => {
  response.status(422);
  response.json({ Error: message });
  return;
};

let notes = [
  {
    title: "Note Title",
    content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...",
    id: 0
  },
  {
    title: "Note Title",
    content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...",
    id: 1
  },
  {
    title: "Note Title",
    content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...",
    id: 2
  },
  {
    title: "Note Title",
    content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...",
    id: 3
  },
  {
    title: "Note Title",
    content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...",
    id: 4
  },
  {
    title: "Note Title",
    content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...",
    id: 5
  },
  {
    title: "Note Title",
    content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...",
    id: 6
  },
  {
    title: "Note Title",
    content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...",
    id: 7
  },
  {
    title: "Note Title",
    content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...",
    id: 8
  }
];

server.get('/notes', (request, response) => { response.json(notes) });

let noteID = 101;

server.post('/notes', (request, response) => {
  const { title, content } = request.body;
  const newNote = { title, content, id: noteID };
  if (!title || !content) {
    return sendUserError(
      'A title and content text are required.',
      response
    );
  }

  notes.push(newNote);
  noteID++;
  response.json(notes);
});

server.put('/notes/:id', (request, response) => {
  const { id } = request.params;
  const { title, content } = request.body;
  const findNoteByID = note => { return note.id == id };

  const foundNote = notes.find(findNoteByID);
  if (!foundNote) {
    return sendUserError('No Note found by that ID', response);
  } else {
    if (title) foundNote.title = title;
    if (content) foundNote.content = content;
    response.json(notes);
  }
});

server.delete('/notes/:id', (request, response) => {
  const { id } = request.params;
  const foundNote = notes.find(note => note.id == id);

  if (foundNote) {
    notes = notes.filter(note => note.id != id);
    response.status(200).json(notes);
  } else {
    sendUserError('No note by that ID exists in the note DB', response);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
