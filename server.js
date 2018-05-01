const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

let notes = [];

app.use(bodyParser.json());

app.use(cors());

app.get('/homeNotes', (req, res) => {
	// send "notes" response
	// should be empty array

	res.send(notes);
});

app.listen(5000, () => {
	// should listen to "http://localhost:5000/homeNotes"
	
	console.log('server listening on port 5000');
});