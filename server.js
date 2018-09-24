const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let nextId = 4;

let notes = [
  {
    id: 1,
    title: 'Test Note 1',
    content: 'This is my first note!',
  },
  {
    id: 2,
    title: 'Test Note 2',
    content: `Okay, here's the thing about bosses and employees. A good boss will say, "Hey, it's my birthday. Celebrate me." A great boss will say, "Hey, it's my birthday. Celebrate yourselves, because you are the ones who made me great, and I will acknowledge your contributions with donuts." My ideals at a party? Easy. Jim. Pam. Ryan. The Mayor. Barack Obama. Shiloh Jolie-Pitt. Because at the end of the night, Brad or Angelina would have to come and pick him up and I would get to meet them. Shia La Beef because of Disturbia. Umm, all of the children of the world. Val Kilmer. But he probably wouldn't come, too famous. Obviously George Clooney. Umm... And Jan definitely, if there was room.`,
  },
  {
    id: 3,
    title: 'Test Note 3',
    content: 'Wow, my third note!',
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
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: 'Note not found' });
  }
});

app.post('/api/notes', (req, res) => {
  console.log(req.body);
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
    res.status(404).send({ msg: 'Note not found' });
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
