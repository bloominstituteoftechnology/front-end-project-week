const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let nextId = 6;

let notes = [
  {
    id: 1,
    title: 'Jorge',
    content: 'Hello, Having fun yet?',
  },
  {
    id: 2,
    title: 'Neto',
    content: 'The brother',
  },
  {
    id: 3,
    title: 'Nancy',
    content: 'The lady friend',
  },
  {
    id: 4,
    title: 'Hilda',
    content: 'My mama',
  },
  {
    id: 5,
    title: 'Jorge',
    content: 'The O.G.',
  },
];

app.use(bodyParser.json());

app.use(cors());

app.get('/api/notes', (req, res) => {
  setTimeout(() => {
    res.send(notes);
  }, 1000);
});

app.get('/api/notes/:id', (req, res) => {
  const note = notes.find(f => f.id == req.params.id);

  if (note) {
    res.status(200).json(note);
  } else {
    res.status(404).send({ msg: 'note not found' });
  }
});

app.post('/api/notes', (req, res) => {
  const note = { id: getNextId(), ...req.body };

  notes = [...notes, note];

  res.send(notes);
});

app.put('/api/notes/:id', (req, res) => {
  const { id } = req.params;

  const noteIndex = notes.findIndex(f => f.id == id);

  if (noteIndex > -1) {
    const note = { ...notes[noteIndex], ...req.body };

    notes = [
      ...notes.slice(0, noteIndex),
      note,
      ...notes.slice(noteIndex + 1),
    ];
    res.send(notes);
  } else {
    res.status(404).send({ msg: 'note not found' });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const { id } = req.params;

  notes = notes.filter(f => f.id !== Number(id));

  res.send(notes);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
