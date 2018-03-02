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
    title: 'A classic pangram',
    content: 'The quick brown fox jumps over the lazy dog.',
  },
  {
    id: 2,
    title: 'Another one',
    content: 'Jackdaws love my big sphinx of quartz.',
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
  {
    id: 7,
    title: 'A palindrome',
    content: 'A man, a plan, a canal: Panama!'
  },
  {
    id: 8,
    title: 'A really long palindrome',
    content: `Dammit I’m mad.
Evil is a deed as I live.
God, am I reviled?
I rise, my bed on a sun, I melt.
To be not one man emanating is sad. I piss.
Alas, it is so late. Who stops to help?
Man, it is hot. I’m in it. I tell.
I am not a devil. I level “Mad Dog”.
Ah, say burning is, as a deified gulp,
In my halo of a mired rum tin.
I erase many men. Oh, to be man, a sin.
Is evil in a clam? In a trap?
No. It is open. On it I was stuck.
Rats peed on hope. Elsewhere dips a web.
Be still if I fill its ebb.
Ew, a spider… eh?
We sleep. Oh no!
Deep, stark cuts saw it in one position.
Part animal, can I live? Sin is a name.
Both, one… my names are in it.
Murder? I’m a fool.
A hymn I plug, deified as a sign in ruby ash.
A Goddam level I lived at.
On mail let it in. I’m it.
Oh, sit in ample hot spots. Oh wet!
A loss it is alas (sip). I’d assign it a name.
Name not one bottle minus an ode by me:
"Sir, I deliver. I’m a dog.”
Evil is a deed as I live.
Dammit I’m mad.`, 
  },
  {
    id: 9,
    title: 'A word-unit palindrome',
    content: 'Girl, bathing on Bikini, eyeing boy, sees boy eyeing bikini on bathing girl.',
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

app.listen(4444, () => {
  console.log('server listening on port 4444');
});
