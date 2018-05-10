const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());



let notes = [
	{
		id: 0,
		title: 'New Note',
		body: 'testing text',
	},
	{
		id: 1,
		title: 'Is this working?',
        body: 'testing text',
	},
	{
		id: 2,
		title: 'Yes, yes it is',
        body: 'testing text',
    },
    {
		id: 3,
		title: 'How much left to do?',
        body: 'testing text',
    },
    {
		id: 4,
		title: 'hello',
        body: 'testing text',
    },
    {
		id: 5,
		title: 'This is helpful',
        body: 'testing text',
    },
    {
		id: 6,
		title: 'would like to to be done',
        body: 'testing text',
    },
   
];
let noteId = notes.length;

app.get('/notesList', (req, res) => {
	res.send(notes);
});

app.get('/note/:id', (req, res) => {
	const note = notes.filter(note => note.id.toString() === req.params.id)[0];
	res.status(200).json(note);
});

app.post('/notesList', (req, res) => {
	const { title, content } = req.body;
	const newNote = {id: noteId, title, content};
	notes.push(newNote);
	noteId++;
	res.status(201).json(notes);
});

app.put('/note/:id', (req, res) => {
	const { title, content, id } = req.body;
	let note = notes.filter(note => note.id === id);
	notes.splice(id, 1, {id: Number(id), title, content});
	res.status(201).json(notes);
});

app.delete('/note/:id', (req, res) => {
  const { id } = req.params;
  const foundNote = notes.find(note => note.id == id);

  if (foundNote) {
	const noteRemoved = {...foundNote}
	notes = notes.filter(note => note.id != id);
	res.status(200).json({ noteRemoved });
  }
});

app.listen(3333, () => {
	console.log('Server listening on port 3333');
});