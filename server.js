const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 10;

function getNewId() {
  return nextId++;
}

let notes = [
  {
    id: 1,
    title: 'Note Title',
    text: 'Donec maximus at mauris et pulvinar. Sed non neque et neque viverra faucibus non vehicula ante. Aliquam erat volutpat. Curabitur accumsan, massa ut facilisis lacinia, massa tellus finibus nisi, nec tincidunt purus augue vitae ex.',
    author: 'marshall'
  },
  {
    id: 2,
    title: 'Note Title',
    text: 'Donec maximus at mauris et pulvinar. Sed non neque et neque viverra faucibus non vehicula ante. Aliquam erat volutpat. Curabitur accumsan, massa ut facilisis lacinia, massa tellus finibus nisi, nec tincidunt purus augue vitae ex.',
    author: 'marshall'
  },
  {
    id: 3,
    title: 'Note Title',
    text: 'Donec maximus at mauris et pulvinar. Sed non neque et neque viverra faucibus non vehicula ante. Aliquam erat volutpat. Curabitur accumsan, massa ut facilisis lacinia, massa tellus finibus nisi, nec tincidunt purus augue vitae ex.',
    author: 'marshall'
  },
  {
    id: 4,
    title: 'Note Title',
    text: 'Donec maximus at mauris et pulvinar. Sed non neque et neque viverra faucibus non vehicula ante. Aliquam erat volutpat. Curabitur accumsan, massa ut facilisis lacinia, massa tellus finibus nisi, nec tincidunt purus augue vitae ex.',
    author: 'timmy'
  },
  {
    id: 5,
    title: 'Note Title',
    text: 'Donec maximus at mauris et pulvinar. Sed non neque et neque viverra faucibus non vehicula ante. Aliquam erat volutpat. Curabitur accumsan, massa ut facilisis lacinia, massa tellus finibus nisi, nec tincidunt purus augue vitae ex.',
    author: 'timmy'
  },
  {
    id: 6,
    title: 'Note Title',
    text: 'Donec maximus at mauris et pulvinar. Sed non neque et neque viverra faucibus non vehicula ante. Aliquam erat volutpat. Curabitur accumsan, massa ut facilisis lacinia, massa tellus finibus nisi, nec tincidunt purus augue vitae ex.',
    author: 'jessica'
  },
  {
    id: 7,
    title: 'Note Title',
    text: 'Donec maximus at mauris et pulvinar. Sed non neque et neque viverra faucibus non vehicula ante. Aliquam erat volutpat. Curabitur accumsan, massa ut facilisis lacinia, massa tellus finibus nisi, nec tincidunt purus augue vitae ex.',
    author: 'jessica'
  },
  {
    id: 8,
    title: 'Note Title',
    text: 'Donec maximus at mauris et pulvinar. Sed non neque et neque viverra faucibus non vehicula ante. Aliquam erat volutpat. Curabitur accumsan, massa ut facilisis lacinia, massa tellus finibus nisi, nec tincidunt purus augue vitae ex.',
    author: 'jessica'
  },
  {
    id: 9,
    title: 'Note Title',
    text: 'Donec maximus at mauris et pulvinar. Sed non neque et neque viverra faucibus non vehicula ante. Aliquam erat volutpat. Curabitur accumsan, massa ut facilisis lacinia, massa tellus finibus nisi, nec tincidunt purus augue vitae ex.',
    author: 'jessica'
  },
];

app.use(cors());
app.use(bodyParser.json());

app.get('/notes', (req, res) => {
  res.status(200).json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const note = notes.filter(note => note.id.toString() === req.params.id)[0];
  res.status(200).json(note);
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
  notes = notes.filter(friend => friend.id != req.params.id);
  res.status(200).json(notes);
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
