const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
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
    title: "Sample note",
    textBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae magna nisl. Phasellus sed risus nulla."
  },
  {
    id: 1,
    title: "Sample note",
    textBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae magna nisl. Phasellus sed risus nulla."
  },
  {
    id: 2,
    title: "Sample note",
    textBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae magna nisl. Phasellus sed risus nulla."
  },
  {
    id: 3,
    title: "Sample note",
    textBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae magna nisl. Phasellus sed risus nulla."
  },
  {
    id: 4,
    title: "Sample note",
    textBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae magna nisl. Phasellus sed risus nulla."
  }
];

server.get("/notes", (req, res) => {
  res.json(notes);
});
let noteId = 5;

server.post("/notes", (req, res) => {
  const {
    title,
    textBody
  } = req.body;
  const newNote = {
    title,
    textBody,
    id: noteId
  };
  if (!title || !textBody) {
    return sendUserError(
      "A title and text are required to create a new note.",
      res
    );
  }
  const findNoteByTitle = note => {
    return note.title === title;
  };
  if (notes.find(findNoteByTitle)) {
    return sendUserError(`${title} already exists, please give your note a unique title.`, res);
  }

  notes.push(newNote);
  noteId++;
  res.json(notes);
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

server.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  const foundNote = notes.find(note => note.id == id);

  if (foundNote) {
    const NoteRemoved = { ...foundNote };
    notes = notes.filter(note => note.id != id);
    res.status(200).json(notes);
  } else {
    sendUserError("No note by that ID exists in the note DB", res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
