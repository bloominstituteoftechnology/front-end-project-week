//Modules
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const Note = require('./Database/Notes/Note')
//Database
let uri = 'mongodb://2940cristian:dance360@ds235840.mlab.com:35840/noteslambda';
mongoose.connect(uri, function(err, success) {
    if(err) throw err;
    console.log("Connected to DB")
})

//Middleware
server.use(express.json());


//Routers
server.get("/", (req,res) => {res.send('API RUNNING')})

server.get("/notes", (req, res) => {
    Note.find().then(notes => {
        res.status(200).json(notes)
    }).catch(err => {
        res.status(404).json(err)
    })
})

server.get("/notes/:id", (req, res) => {
    const id = req.params.id;

    Note.findById(id).then(note => {
        res.status(200).json(note)
    }).catch(err => {
        res.status(404).json(err)
    })
})


server.post("/notes", (req, res) => {
    const newNote = req.body;
    const note = new Note(newNote);

    note.save().then(note => {
        res.status(200).json(note);
    }).catch(err => {
        res.status(500).json(err)
    })
})

server.listen(process.env.PORT || 5000)

