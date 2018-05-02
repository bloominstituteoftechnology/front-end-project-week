const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;

const app = express();

let nextId = 1;

let notes = [];

app.use(bodyParser.json());

app.use(cors());

app.get('/homeNotes', (req, res) => {
	// send "notes" response
	// should be empty array

	res.send(notes);
});


app.post('/homeNotes', (req, res) => {
	const note = { id: grabNextId(), ...req.body };

	// creates, a new note obj and then adds all the content to notes state.
  
	notes = [...notes, note];
  
	res.send(notes);
  });


  // create a function that will increment note ID + 1 when something new is added.

  function grabNextId() {
	return nextId++;
  }


app.listen(port, () => {
	// should listen to "http://localhost:5000/homeNotes"
	
	console.log(`server listening on port ${port}`);
});