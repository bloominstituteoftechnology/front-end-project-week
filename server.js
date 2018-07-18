const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4444;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let notes = [
  {
    id: 0,
    title: "Welcome to Lambda Notes",
    textBody:
      "Lambda Notes is a simple note-taking app. It was built using React and other related libraries. Lambda Notes is a simple note-taking app. It was built using React and other related libraries. Lambda Notes is a simple note-taking app. It was built using React and other related libraries."
  },
  {
    id: 1,
    title: "Here's how it works",
    textBody: "On the side bar, you will notice two buttons: View your notes and Create new note. What they do is self explanatory. Click View to see all your notes and Create to add a new one."
  },
  {
    id: 2,
    title: "This is the MVP feature set",
    textBody: "The MVP included the following features: (1) Display a list of notes, (2) Create a note with a title and content, (3) View an existing note, (4) Edit an existing note, and (5) Delete an existing note."
  },
  {
    id: 3,
    title: "Extra features: Search and Markdown support",
    textBody: "To build Lambda Notes, react router, axios, and styled components were used as well as reactstrap and react-modal. To build Lambda Notes, react router, axios, and styled components were used as well as reactstrap and react-modal."
  },
  {
    id: 4,
    title: "Take a look around",
    textBody: "Click through the app and play around with it. Add notes of your own, edit them as you see fit, and delete anything you'd like. You'll find search and markdown support among the additional features."
  }
];

let noteId = 5;

server.get('/notes', (req, res) => {
    res.json(notes);
});

server.get('/notes/:id', (req, res) => {

  if (note = notes.find(f => f.id == req.params.id)) {
    res.status(200).json(note);
  } else {
    res.status(404).send({ msg: 'Note not found' });
  }
});

server.post('/notes', (req, res) => {
  const note = { id: getNoteId(), ...req.body };

  notes = [...notes, note];

  res.send(notes);
});

server.put("/notes/:id", (req, res) => {
  const { id } = req.params;
  const {
    title,
    textBody
  } = req.body;
  const findNoteById = note => {
    return note.id == id;
  };
  const foundNote = notes.find(findNoteById);
  if (!foundNote) {
    return sendUserError("No Note found by that ID", res);
  } else {
    if (title) foundNote.title = title;
    if (textBody) foundNote.textBody = textBody;
    res.json(notes);
  }
});

server.delete('/notes/:id', (req, res) => {
  const { id } = req.params;

  notes = notes.filter(f => f.id !== Number(id));

  res.send(notes);
});

function getNoteId() {
  return noteId++;
}

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});