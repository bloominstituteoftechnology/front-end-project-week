const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;

const app = express();

let nextId = 4;

let notes = [
	{id : 1, title: 'Note', content: 'placeholder'},
	{id : 2, title: 'Note2', content: 'asejfeasrgergegegergregregegegregergregreglierhgforsejfgwqikgvfikyewvfiykewhvfykhjewvfjykwevfjykewvfykjwehvfyjikewvfyjwvefyuijwvyuijfveyiwjfvwyiefvyiewvfyiwevfyiewvyifvwiyefvyiwefvyiwevyifwyevfiwevfywevfiwevyifvlgfukewrgfkuwgfkuywkjyfgwkjyfgwykjfgyjwqgfeykjuwgefykijghfjehfefejrewrtgege4geggegrgrgergreerregegergegfgerg'},
	{id : 3, title: 'Note3', content: 'more random text'},
];

app.use(bodyParser.json());

app.use(cors());

app.get('/homeNotes', (req, res) => {

	res.send(notes);
});

app.post('/homeNotes', (req, res) => {
	const note = { id: grabNextId(), ...req.body };
  
	notes = [...notes, note];
  
	res.send(notes);
  });


  // create a function that will increment note ID + 1 when something new is added.

  function grabNextId() {

	return nextId++;

  }

  app.delete('/Note/:id', (req, res) => {
	const { id } = req.params;
  
	notes = notes.filter(n => n.id !== Number(id));
  
	res.send(notes);
	});

	
	app.put('/Note/:id', (req, res) => {
		const { id } = req.params;
	
		const noteIndex = notes.findIndex(nID => nID.id == id);
	
		if (noteIndex > -1) {
			const note = { ...notes[noteIndex], ...req.body };
	
			notes = [
				...notes.slice(0, noteIndex),
				note,
				...notes.slice(noteIndex + 1),
			];
			res.send(notes);
		} else {
			res.status(404).send({ msg: 'blarg' });
		}
	});


app.listen(port, () => {
	// should listen to "http://localhost:5000/homeNotes"
	
	console.log(`server listening on port ${port}`);
});