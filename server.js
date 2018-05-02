const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const notes = [
	{
		id: 0,
		title: 'App maintenece',
		content: 'Lorem Epsum walla',
	},
	{
		id: 1,
		title: 'Blah blah',
        content: 'Lorem Epsum walla',
	},
	{
		id: 2,
		title: 'Does this work?',
        content: 'Lorem Epsum walla',
    },
    {
		id: 3,
		title: 'Make lunch',
        content: 'Lorem Epsum walla',
    },
    {
		id: 4,
		title: 'React tips',
        content: 'Lorem Epsum walla',
    },
    {
		id: 5,
		title: 'Redux sucks',
        content: 'Lorem Epsum walla',
    },
    {
		id: 6,
		title: 'The perfect grilled cheese',
        content: 'Lorem Epsum walla',
    },
    {
		id: 7,
		title: 'yadda yadda',
        content: 'Lorem Epsum walla',
    },
    {
		id: 8,
		title: 'Code everyday',
        content: 'Lorem Epsum walla',
    },
];

app.get('/notes', (req, res) => {
	res.send(notes);
});

app.get('/note/:id', (req, res) => {
	const note = notes.filter(note => note.id.toString() === req.params.id)[0];
	res.status(200).json(note);
});

app.post('/notes', (req, res) => {
	if (req.body.id !== undefined) notes.push(req.body);
	res.status(201).json(notes);
});

app.listen(5005, () => {
	console.log('Server listening on port 5005');
});