const express = require('express');
const cors = require('cors');
const port = 5000;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
    res.status(422);
    res.json({ Error: msg });
    return;
};

let notes = [
];

server.get('/api/notes', (req, res) => {
    res.json(notes);
});

server.get('/api/notes/:id', (req, res) => {
    const note = notes.filter((note, index) => index.toString() === req.params.id)[0];
    res.status(200).json(note);
});

let noteId = 0;

server.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    const newNote = { id: noteId, title, text }
    if (!title || !text) {
        return sendUserError(
            'Title and Text are required to create a note in the notes DB.',
            res
        );
    }

    notes.push(newNote);
    noteId++;
    res.json(notes);
});

server.put('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    const { title, text } = req.body;

    const foundNote = notes.find((note, index) => index == id);
    if (!foundNote) {
        return sendUserError('No note found by that ID', res);
    }
    else {
        if (title) foundNote.title = title;
        if (text) foundNote.text = text;
        res.json(notes);
    }
});

server.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    const foundNote = notes.find((note, index) => index == id);

    if (foundNote) {
        const NoteRemoved = { ...foundNote };
        notes = notes.filter((note, index) => index != id);
        res.status(200).json(notes);
    }
    else {
        sendUserError('No note by that ID exists in the note DB', res);
    }
});

server.listen(port, err => {
    if (err) console.log(err);
    console.log(`server is listening on port ${port}`);
});

