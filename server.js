const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
let nextId = 10;

function getNewId() {
  return nextId++;
}

let notes = [
    {
        id: 1,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 2,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 3,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 4,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 5,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 6,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 7,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 8,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    },
    {
        id: 9,
        title: 'Note Title',
        text: 'Lorem ipsum dolor amet echo park tote bag meh, fanny pack roof party franzen direct trade.'
    }
];


app.use(cors());
app.use(bodyParser.json());

app.get("/notes", (req, res) => {
  res.status(200).json(notes);
});

app.post("/notes", (req, res) => {
  const note = { id: getNewId(), ...req.body };
  notes = [...notes, note];
  res.status(201).json(notes);
});

app.put("/notes/:id", (req, res) => {
  const { id } = req.params;
  let noteIndex = notes.findIndex(note => note.id == id);

  if (noteIndex >= 0) {
    notes[noteIndex] = { ...notes[noteIndex], ...req.body };
    res.status(200).json(notes);
  } else {
    res.status(404).json({ message: `The note with id ${id} does not exist.` });
  }
});

app.delete("/notes/:id", (req, res) => {
  notes = notes.filter(note => note.id != req.params.id);
  res.status(200).json(notes);
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});