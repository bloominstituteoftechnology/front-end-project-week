const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 6;

function getNewId() {
  return nextId++;
}

let notes = [
  {
    id: 0,
    title: 'wut',
    text: "hhhhhhhhhhhhhhhhhhhhhhhhhhh"
},
{
    id: 1,
    title: 'yut',
    text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
},
{
  id: 2,
  title: 'yut',
  text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
},
{
id: 3,
title: 'yut3',
text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
},
{
id: 4,
title: 'yu4t',
text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
},
{
id: 5,
title: 'yut5',
text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
},
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
    res
      .status(404)
      .json({ message: `The note with id ${id} does not exist.` });
  }
});

app.delete('/notes/:id', (req, res) => {
	notes = notes.filter(note => note.id != req.params.id);
	res.status(200).json(notes);
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});