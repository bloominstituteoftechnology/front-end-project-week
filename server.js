const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let nextId = 10;

let notes = [
  {
    id: 1,
    title: "Example Note",
    content: "You can fill in your __notes__ with any *information* you'd like. You can use `markdown` to style your note and add images or code snippets. Actually, adding images has not yet been implemented.\n \nHere is a code snippet: \n```javascript\nvar example = \"hello world\";\n```\n \nAnd here is an example of a heading: \n### Heading"
  },
  {
    id: 2,
    title: "A Second Note",
    content: "You can fill in your notes with any information you'd like. You can use markdown to style your note and add images or code snippets."
  },
  {
    id: 3,
    title: "Another Note",
    content: "You can fill in your notes with any information you'd like. You can use markdown to style your note and add images or code snippets."
  },
  {
    id: 4,
    title: "More Notes",
    content: "You can fill in your notes with any information you'd like. You can use markdown to style your note and add images or code snippets."
  },
  {
    id: 5,
    title: "Note 5",
    content: "You can fill in your notes with any information you'd like. You can use markdown to style your note and add images or code snippets."
  },
  {
    id: 6,
    title: "Notes, Notes, Notes",
    content: "You can fill in your notes with any information you'd like. You can use markdown to style your note and add images or code snippets."
  },
  {
    id: 7,
    title: "My Note",
    content: "You can fill in your notes with any information you'd like. You can use markdown to style your note and add images or code snippets."
  },
  {
    id: 8,
    title: "React Note",
    content: "You can fill in your notes with any information you'd like. You can use markdown to style your note and add images or code snippets."
  },
  {
    id: 9,
    title: "Redux Note",
    content: "You can fill in your notes with any information you'd like. You can use markdown to style your note and add images or code snippets."
  },
];

app.use(bodyParser.json());

app.use(cors());

app.get('/notes', (req, res) => {
  setTimeout(() => {
    res.send(notes);
  }, 1000);
});

app.get('/note/:id', (req, res) => {
  const note = notes.find(f => f.id == req.params.id);

  if (note) {
    res.status(200).json(note);
  } else {
    res.status(404).send({ msg: 'Note not found' });
  }
});

app.post('/notes', (req, res) => {
  const note = { id: getNextId(), ...req.body };

  notes = [...notes, note];

  res.send(notes);
});

app.put('/note/:id', (req, res) => {
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
    res.status(404).send({ msg: 'Note not found' });
  }
});

app.delete('/note/:id', (req, res) => {
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
