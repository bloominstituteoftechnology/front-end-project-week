const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let nextId = 10;

let notes = [
  {
    id: 1,
    title: 'Chase Mice',
    content: 'Chase mice damn that dog but make muffins. Claw at curtains stretch and yawn nibble on tuna ignore human bite human hand annoy owner until he gives you food say meow repeatedly until belly rubs, feels good when in doubt, wash.',
  },
  {
    id: 2,
    title: 'Staring Out',
    content: 'Stare out the window swat turds around the house but sleep on my human\'s head meow all night purr while eating chase dog then run away so stick butt in face. Put butt in owner\'s face pet my belly, you know you want to; seize the hand and shred it!',
  },
  {
    id: 3,
    title: 'Cable Chewing',
    content: 'Chew on cable ask to go outside and ask to come inside and ask to go outside and ask to come inside inspect anything brought into the house.',
  },
  {
    id: 4,
    title: 'Chase Mice',
    content: 'Chase mice damn that dog but make muffins. Claw at curtains stretch and yawn nibble on tuna ignore human bite human hand annoy owner until he gives you food say meow repeatedly until belly rubs, feels good when in doubt, wash.',
  },
  {
    id: 5,
    title: 'Staring Out',
    content: 'Stare out the window swat turds around the house but sleep on my human\'s head meow all night purr while eating chase dog then run away so stick butt in face. Put butt in owner\'s face pet my belly, you know you want to; seize the hand and shred it!',
  },
  {
    id: 6,
    title: 'Cable Chewing',
    content: 'Chew on cable ask to go outside and ask to come inside and ask to go outside and ask to come inside inspect anything brought into the house.',
  },
  {
    id: 7,
    title: 'Chase Mice',
    content: 'Chase mice damn that dog but make muffins. Claw at curtains stretch and yawn nibble on tuna ignore human bite human hand annoy owner until he gives you food say meow repeatedly until belly rubs, feels good when in doubt, wash.',
  },
  {
    id: 8,
    title: 'Staring Out',
    content: 'Stare out the window swat turds around the house but sleep on my human\'s head meow all night purr while eating chase dog then run away so stick butt in face. Put butt in owner\'s face pet my belly, you know you want to; seize the hand and shred it!',
  },
  {
    id: 9,
    title: 'Cable Chewing',
    content: 'Chew on cable ask to go outside and ask to come inside and ask to go outside and ask to come inside inspect anything brought into the house.',
  },

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
    res.status(404).send({ msg: 'Note not found' });
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
    res.status(404).send({ msg: 'Note not found' });
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