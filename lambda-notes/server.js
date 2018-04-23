const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const notes = [
	{
		id: 0,
		title: 'Test note 1',
		body: 'Test note body 1',
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
