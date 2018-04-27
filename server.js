const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let nextId = 10;

let notes = [
    {
        id: 1,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 2,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 3,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 4,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 5,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 6,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 7,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 8,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 9,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    }
];

app.use(bodyParser.json());

app.use(cors());

app.get('/api/notes', (req, res) => {
  res.send(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const note = notes.find(n => n.id == req.params.id);

  if (note) {
    res.status(200).json(note);
  } else {
    res.status(404).send({ msg: 'Note Not Found' });
  }
});

app.post('/api/notes', (req, res) => {
  const note = { id: getNextId(), ...req.body };

  notes = [...notes, note];

  res.send(notes);
});

app.put('/api/notes/:id', (req, res) => {
  const { id } = req.params;

  const NoteIndex = notes.findIndex(n => n.id == id);

  if (NoteIndex > -1) {
    const note = { ...notes[NoteIndex], ...req.body };

    notes = [
      ...notes.slice(0, NoteIndex),
      note,
      ...notes.slice(NoteIndex + 1),
    ];
    res.send(notes);
  } else {
    res.status(404).send({ msg: 'Note Not Found' });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const { id } = req.params;

  notes = notes.filter(n => n.id !== Number(id));

  res.send(notes);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
}); 
