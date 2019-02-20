const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3333;
const app = express();

let nextId = 6;

let notes = [
  {
    "tags":[],
    "_id":"5ba8145811b7c40014cb7abfasdfag",
    "title":"Blah BLah",
    "textBody":"dsfsdf",
    "__v":0},

  {
    "tags":[],
    "_id":"5ba8145811b7c40014cb7abfghjkghj",
    "title":"MORE BLAH",
    "textBody":"Diggity doobity Dopper",
    "__v":0},

  {
    "tags":[],
    "_id":"5ba8145811b7c40014cb7abfgtbrtgnty",
    "title":"ANOTHER NOTE",
    "textBody":"I've already gotten bored of making these notes.",
    "__v":0},

  {
    "tags":[],
    "_id":"5ba8145811b7c40014cb7abfas4fasdf",
    "title":"FOURTH NOTE",
    "textBody":"May the Fourth be with you, always.",
    "__v":0},

  {
    "tags":[],
    "_id":"5ba8145811b7c40014cb7abfafs45tsdtg",
    "title":"FOURTH PRIME NOTE",
    "textBody":"BECAUSE ONE TECHNICALLY ISN'T CONSIDERED PRIME",
    "__v":0}
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
  return Date.now().toString();
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
