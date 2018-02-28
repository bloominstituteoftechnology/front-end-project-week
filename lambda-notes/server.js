const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

let notes = [
  {
    id: 1,
    title: 'A classic pangram',
    content: 'The quick brown fox jumps over the lazy dog.'
  },
  {
    id: 2,
    title: 'Another one',
    content: 'Jackdaws love my big sphinx of quartz.'
  },
  {
    id: 3,
    title: 'A musical pangram',
    content: 'Buxtehude played quivering jazz licks for Brahms and Wagner.',
  },
  {
    id: 4,
    title: 'Another musical one',
    content: 'Was Bartok cleverly quoting Franz Joseph Haydn\'s Oxford Symphony?',
  },
  {
    id: 5,
    title: 'Each letter used exactly once',
    content: 'JFK got my VHS, PC, and XLR web quiz.',
  },
  {
    id: 6,
    title: 'And here\'s one in Russian',
    content: 'Съешь ещё этих мягких французских булок, да выпей же чаю. (Eat more of these soft French loaves and drink tea.)',
  },
];

app.use(cors());
app.use(bodyParser.json());

app.get('/notes', (req, res) => {
  res.status(200).json(notes);
});

app.post('/notes', (req, res) => {
  const notes = { id: getNewId(), ...req.body };
  friends = [...notes, note];
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

app.listen(4444, () => {
  console.log('server listening on port 4444');
});
