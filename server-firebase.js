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
for(let i=0; i < 600; ++i){
    prodName = faker.commerce.productName();
    notes.push({
        title:prodName,
        description:faker.lorem.paragraphs(8)+ ' ' + prodName,
        image:faker.internet.avatar(),
        tags:faker.lorem.words(7) + ' ' + prodName ,
    });
}

server.get('/notes', (req, res) => {
    notes.once('value').then(function(dataResponse) {
        const data = dataResponse.val();
        res.json(data);
    }).catch(function(error) {
        console.log('Failed:', error);
    });
});

server.post('/notes', (req, res) => {
    const {title, description, tags} = req.body;
    const newNote = {title, description, tags, image:faker.image.animals()};
    if (!title || !description || !tags) {
        return sendUserError(
            'Ya gone did Noted! title/description/tags are all required to create a note in the note DB.',
            res
        );
    }
    notes.push(newNote);
    res.json(notes);
});

server.put('/notes/update/:key', (req, res) => {
    const {key} = req.params;
    const {title, description, tags} = req.body.noteObj;

    database.ref('notes/' + key).update({
        title:title,
        description:description,
        tags:tags,
    }).then(() => {
        res.status(200).json(notes);
    }).catch((error) => {
        console.log('Failed to send notification to user:', error);
    });

});

server.delete('/notes/delete/:key', (req, res) => {
    let {key} = req.params;

    notes.child(key).remove().then((notes) => {
        res.status(200).json(notes);
    }).catch((error) => {
        console.log('Failed to send notification to user:', error);
    });
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
