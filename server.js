const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		`;

let notes = [
	{
		id: 0,
		title: '## App maintenece',
		content: dummyText,
	},
	{
		id: 1,
		title: '## Blah blah',
        content: dummyText,
	},
	{
		id: 2,
		title: '## Does this work?',
        content: dummyText,
    },
    {
		id: 3,
		title: '## Make lunch',
        content: dummyText,
    },
    {
		id: 4,
		title: '## React tips',
        content: dummyText,
    },
    {
		id: 5,
		title: '## Redux sucks',
        content: dummyText,
    },
    {
		id: 6,
		title: '## The perfect grilled cheese',
        content: dummyText,
    },
    {
		id: 7,
		title: '## yadda yadda',
        content: dummyText,
    },
    {
		id: 8,
		title: '## Code everyday',
        content: dummyText,
    },
];
let noteId = notes.length;

app.get('/notes', (req, res) => {
	res.send(notes);
});

app.get('/note/:id', (req, res) => {
	const note = notes.filter(note => note.id.toString() === req.params.id)[0];
	res.status(200).json(note);
});

app.post('/notes', (req, res) => {
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
	res.status(200).json(notes);
  }
});

app.listen(5005, () => {
	console.log('Server listening on port 5005');
});