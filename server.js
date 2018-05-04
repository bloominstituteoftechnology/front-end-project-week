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
    title: 'Give Me Liberty or Give Me Death, 1775',
    content:
      'Is life so dear, or peace so sweet, as to be purchased at the price of chains and slavery? Forbid it, Almighty God! — I know not what course others may take; but as for me, give me liberty or give me death! —Patrick Henry'
  },
  {
    id: 2,
    title: 'Apology, 4th century B.C.',
    content:
      'The hour of departure has arrived, and we go our ways — I to die, and you to live. Which is better God only knows. —Socrates'
  },
  {
    id: 3,
    title: 'The Hypocrisy of American Slavery, 1852',
    content:
      'Whether we turn to the declarations of the past, or to the professions of the present, the conduct of the nation seems equally hideous and revolting. America is false to the past, false to the present, and solemnly binds herself to be false to the future. —Frederick Douglas'
  },
  {
    id: 4,
    title: 'Gettysburg Address, 1863',
    content:
      'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal. —Abraham Lincoln'
  },
  {
    id: 5,
    title: "Women's Rights to the Suffrage, 1873",
    content:
      'It was we, the people; not we, the white male citizens; nor yet we, the male citizens; but we, the whole people, who formed the Union. And we formed it, not to give the blessings of liberty, but to secure them; not to the half of ourselves and the half of our posterity, but to the whole people — women as well as men. —Susan B. Anthony'
  },
  {
    id: 6,
    title: 'Blood, Toil, Tears and Sweat, 1940',
    content:
      'You ask, what is our policy? I can say: It is to wage war, by sea, land and air, with all our might and with all the strength that God can give us; to wage war against a monstrous tyranny, never surpassed in the dark, lamentable catalogue of human crime. That is our policy. —Winston Churchhill'
  },
  {
    id: 7,
    title: 'Inaugural Address, 1961',
    content:
      'My fellow Americans: ask not what your country can do for you — ask what you can do for your country. —John F. Kennedy'
  },
  {
    id: 8,
    title: 'I Have a Dream, 1963',
    content:
      'We have also come to this hallowed spot to remind America of the fierce urgency of Now. This is no time to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism. Now is the time to make real the promises of democracy. —Martin Luther King, Jr.'
  },
  {
    id: 9,
    title: 'The American Promise, 1965',
    content:
      'There is no moral issue. It is wrong — deadly wrong — to deny any of your fellow Americans the right to vote in this country. There is no issue of States rights or national rights. There is only the struggle for human rights. I have not the slightest doubt what will be your answer. —Lyndon B. Johnson'
  }
];

app.use(cors());
app.use(bodyParser.json());

app.get('/notes', (req, res) => {
  res.status(200).json(notes);
});

app.get('/notes/:id', (req, res) => {
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
  let noteIndex = notes.findIndex(note => Number(note.id) === Number(id));
  if (noteIndex >= 0) {
    notes[noteIndex] = { ...notes[noteIndex], ...req.body };
    res.status(200).json(notes);
  } else {
    res
      .status(404)
      .json({ message: `The note with id ${noteIndex} does not exist.` });
  }
});

app.delete('/notes/:id', (req, res) => {
  notes = notes.filter(note => {
    return String(note.id) !== String(req.params.id);
  });
  res.status(200).json(notes);
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
