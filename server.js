const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 9;

function getNewId() {
  return nextId++;
}

let notes = [
  { id: 0, title: 'Note 2', content: 'some test' },
  { id: 1, title: 'Note 1', content: 'some test' },
  { id: 2, title: 'Note 3', content: 'some test' },
  { id: 3, title: 'Note 4', content: 'some test' },
  { id: 4, title: 'Note 5', content: 'some test' },
  { id: 5, title: 'Note 6', content: 'some test' },
  { id: 6, title: 'Note 7', content: 'some test' },
  { id: 7, title: 'Note 8', content: 'some test' },
  { id: 8, title: 'Note 9', content: 'some test' }
];

app.use(cors());
app.use(bodyParser.json());

app.get('/notes', (req, res) => {
  res.status(200).json(notes);
});

app.post('/notes', (req, res) => {
  const note = { id: getNewId(), ...req.body };
  notes = [...notes, note];
  res.status(201).json(notes);
});

app.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  let noteIndex = notes.findIndex(note => note.id == id);

  if (noteIndex >= 0) {
    notes[noteIndex] = { ...notes[noteIndex], ...req.body };
    res.status(200).json(notes);
  } else {
    res.status(404).json({ message: `The note with id ${id} does not exist.` });
  }
});

app.delete('/notes/:id', (req, res) => {
  notes = notes.filter(note => note.id != req.params.id);
  res.status(200).json(notes);
});

app.listen(5001, () => {
  console.log('server listening on port 5001');
});
