const express = require('express');
const helmet = require('helmet');
const knex = require('knex')
const cors = require('cors')
const server = express();
const bcrypt = require('bcryptjs');
const dbConfig = require('./knexfile')
const session = require('express-session');
const db = knex(dbConfig.development);
server.use(express.json());
server.use(helmet());
server.use(cors())

//  GET view existing note
server.get('/api/view/:id', (req, res) => {
    const {id} = req.params
     db('notes').where({id}).then(note => {
        res.status(200).json(note)
    }).catch(err => {
        console.log(err)
        res.status(500).json({error: 'Note not found'})
    })
})
// PUT  edit existing note
server.put('/api/edit/:id', (req, res) => {
     const note = req.body
    const {id} = req.params
     db('notes').where({id}).update(note).then(note => {
        res.status(200).json({message: 'note updated'})
    }).catch(err => {
        res.status(500).json({error: 'note could not be updated'})
    })
})

// DELETE delete existing note
server.delete('/api/delete/:id', (req, res) => {
    const {id} = req.params

    db('notes').where({id}).del().then(note => {
        return res.status(200).json({message: 'Note Deleted'})
    }).catch(err => {
        console.log(err)
        return res.status(500).json({message: 'Could not Delete Note'})
    })
})

// POST create note
server.post('/api/create', (req, res) => {
    const note = req.body

    db.insert(note).into('notes').then(note => {
        res.status(200).json({message: 'note created'})
    }).catch(err => {
        console.log(err)
        res.status(500).json({message: 'Could not create note'})
    })
})
// GET view all notes
server.get('/api/notes', (req, res) => {
    db('notes').then(notes => res.status(200).json(notes))
    .catch(err => res.status(500).json(err))
});

 const port = 8000;
server.listen(port, function () {
    console.log(`\n=*= Backend Project Week Rolling On Port ${port} =*=\n`);
});
