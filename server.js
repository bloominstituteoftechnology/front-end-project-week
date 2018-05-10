const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3333;
const app = express();

app.use(bodyParser.json());
app.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let nextId = 6;

let notes = [
    {
        id: 0,
        title: "Bruce",
        content: "Hello, my name is Bruce!",
    },
    {
        id: 1,
        title: "Bruce",
        content: "Hello, my name is Bruce!",
    },
    {
        id: 2,
        title: "Bruce",
        content: "Hello, my name is Bruce!",
    },
    {
        id: 3,
        title: "Bruce",
        content: "Hello, my name is Bruce!",
    },
    {
        id: 4,
        title: "Bruce",
        content: "Hello, my name is Bruce!",
    },
    {
        id: 5,
        title: "Bruce",
        content: "Hello, my name is Bruce!",
    },
];
app.get('/notes', (req, res) => {
  res.json(notes);
});

app.get('/notes/:id', (req, res) => {
  const note = notes.find(f => f.id == req.params.id);

  if (note) {
    res.status(200).json(note);
  } else {
    res.status(404).send({ msg: 'note not found' });
  }
});

app.post('/notes', (req, res) => {
  const note = { id: getNextId(), ...req.body };

  notes = [...notes, note];

  res.send(notes);
});

app.put('/notes/:id', (req, res) => {
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

app.delete('/notes/:id', (req, res) => {
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