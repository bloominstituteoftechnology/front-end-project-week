const express = require('express');
const cors = require('cors');
const port = 5000;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let nextId = 0;

const getNextId = () => {
  return ++nextId;
};

const gen = () => {
  const res = [];
  for (let i = 0; i < 10; i++) {
    nextId++;
    res.push({
      id: nextId, title: `Title ${i + 1}!`, content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.`
    });
  }
  return res;
}

const notes = gen();

server.get('/notes', (req, res) => {
  res.json(notes);
});

server.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const id = getNextId();
  const newNote = { id: id, title: title, content: content };
  notes.push(newNote);
  nextId++;
  res.json(notes);
});

server.delete('/notes/:id', (req, res) => {
  const { id } = req.params;

  notes = notes.filter(note => note.id !== Number(id));

  res.send(notes);
});

server.put('/notes/:id', (req, res) => {
  const { id } = req.params;

  const noteIndex = notes.findIndex(note => note.id == id);

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

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});