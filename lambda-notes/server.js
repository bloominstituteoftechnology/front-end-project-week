const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

let notes = [
	{
		id: 0,
		title: 'Test note 1',
		body: 'Test note body 1',
	},

	{
		id: 1,
		title: 'Test note 2',
		body: 'Test note body 2',
	},

	{
		id: 2,
		title: 'Test note 3',
		body: 'Test note body 3',
	},

	{
		id: 3,
		title: 'Test note 4',
		body: 'Test note body 4',
	},

	{
		id: 4,
		title: 'Test note 5',
		body: 'Test note body 5',
	},

	{
		id: 5,
		title: 'Test note 6',
		body: 'Test note body 6',
	},

	{
		id: 6,
		title: 'Test note 7',
		body: 'Test note body 7',
	},

	{
		id: 7,
		title: 'Test note 8',
		body: 'Test note body 8',
	},

	{
		id: 8,
		title: 'Test note 9',
		body: 'Test note body 9',
	}
	
];

app.get('/api/notes', (req, res) => {
	res.send(notes);
});

app.get('/api/notes/:id', (req, res) => {
	const note = notes.filter(note => note.id.toString() === req.params.id)[0];
	res.status(200).json(note);
});

app.post('/api/notes', (req, res) => {
	if (req.body.id !== undefined) notes.push(req.body);
	res.status(201).json(notes);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
