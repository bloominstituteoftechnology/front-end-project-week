const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let nextId = 5;

let notes = [
  {
    id: 1,
    title: 'Note 1',
    content: 'Example Content'
  },
  {
    id: 2,
    title: 'Note 2',
    content: 'Example Content'
  },
  {
    id: 3,
    title: 'Note 3',
    content: 'Example Content'
  },
  {
    id: 4,
    title: 'Note 4',
    content: 'Example Content'
  },
  {
    id: 5,
    title: 'Note 5',
    content: 'Example Content'
  },
  {
    id: 6,
    title: 'Note 6',
    content: 'Example Content'
  },
  {
    id: 7,
    title: 'Note 7',
    content: 'Example Content'
  },
  {
    id: 8,
    title: 'Note 8',
    content: 'Example Content'
  }
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
