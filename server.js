const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
    res.status(422);
    res.json({Error: msg});
    return;
};

let notes = [{title:'this is the title', description:'description comes here', tags:'first, second , third'}];
server.get('/notes', (req, res) => {
    setTimeout(function () {
        res.json(notes);
    }, 1000);
});
let noteId = 0;

server.post('/notes', (req, res) => {

    console.log('req.body:', req.body);

    const {title, description, tags} = req.body;
    const newNote = {title, description, tags, id: noteId};
    if (!title || !description || !tags) {
        return sendUserError(
            'Ya gone did Noted! title/description/tags are all required to create a note in the note DB.',
            res
        );
    }
    const findNoteByTitle = note => {
        return note.title === title;
    };
    if (notes.find(findNoteByTitle)) {
        return sendUserError(
            `Ya gone did noted! ${title} already exists in the notes DB.`,
            res
        );
    }

    notes.push(newNote);
    noteId++;
    res.json(notes);
});

server.put('/notes/:id', (req, res) => {
    const {id} = req.params;
    const {title, description, tags} = req.body;
    const findNoteById = note => {
        return note.id == id;
    };
    const foundNote = notes.find(findNoteById);
    if (!foundNote) {
        return sendUserError('No Note found by that ID', res);
    } else {
        if (title) foundNote.title = title;
        if (description) foundNote.description = description;
        if (tags) foundNote.tags = tags;
        res.json(foundNote);
    }
});

server.delete('/notes/:id', (req, res) => {

    console.log('req:', req.params);

    const {id} = req.params;
    const foundNote = notes.find(note => {
        note.id == id;
    });

    if (foundNote) {
        const NoteRemoved = {...foundNote};
        notes = notes.filter(note => note.id != id);
        res.status(200).json({NoteRemoved});
    } else {
        sendUserError('No notes by that ID exists in the note DB', res);
    }

});

server.listen(port, err => {
    if (err) console.log(err);
    console.log(`server is listening on port ${port}`);
});
