const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const faker = require('faker');
const firebase = require('firebase');
const port = 3333;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const app = firebase.initializeApp({
    apiKey: "AIzaSyCaltGFXtJrlojAmAyB3mMXyuenzoSvmrE",
    authDomain: "lambda-notes-1b35f.firebaseapp.com",
    databaseURL: "https://lambda-notes-1b35f.firebaseio.com",
    projectId: "lambda-notes-1b35f",
    storageBucket: "lambda-notes-1b35f.appspot.com",
    messagingSenderId: "301736601427"
});

const database = app.database();
let notes = database.ref('notes');
let prodName = '';
for(let i=0; i < 6; ++i){
    prodName = faker.commerce.productName();
    notes.push({
        title:prodName,
        description:faker.lorem.paragraphs(8)+ ' ' + prodName,
        image:faker.image.animals(),
        tags:faker.lorem.words(7) + ' ' + prodName ,
        id:i,
    });
}

server.get('/notes', (req, res) => {
    notes.once('value').then(function(dataResponse) {
        const data = dataResponse.val();
        res.json(data);
    }).catch(function(error) {
        console.log('Failed to send notification to user:', error);
    });
});

let noteId = 6;

server.post('/notes', (req, res) => {
    const {title, description, tags} = req.body;
    const newNote = {title, description, tags, id: noteId, image:faker.image.animals()};
    if (!title || !description || !tags) {
        return sendUserError(
            'Ya gone did Noted! title/description/tags are all required to create a note in the note DB.',
            res
        );
    }
    // const findNoteByTitle = note => {
    //     return note.title === title;
    // };
    // if (notes.find(findNoteByTitle)) {
    //     return sendUserError(
    //         `Ya gone did noted! ${title} already exists in the notes DB.`,
    //         res
    //     );
    // }

    const respons = notes.push(newNote);
    noteId++;
    res.json(notes);
});

server.put('/notes/update/:id', (req, res) => {
    const {id} = req.params;
    const {title, description, tags} = req.body.note;
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

server.delete('/notes/delete/:id', (req, res) => {
    let {id} = req.params;
    const noteId = parseInt(id);

    const foundNote = notes.find(note => {
        return note.id == noteId;
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

const sendUserError = (msg, res) => {
    res.status(422);
    res.json({Error: msg});
    return;
};
