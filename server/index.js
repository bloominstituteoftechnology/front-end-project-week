const express = require('express');
const app = express();
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./database/db')


//MiddleWare
app.use(helmet());
app.use(logger());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome To Lambda School Back-End Project");
});

app.get('/api/notes', (req, res) => {
    db.getNotes()
        .then(response => {
           res.status(200).json(response)
        })
        .catch( error => {
            res.status(500).json(error)
        })
});

app.post('/api/notes', (req, res) => {
    const { note, body } = req.body
    const note = { note, body }
    db.addNote( note ).first()
        .then( responseId =>{
            if(responseId){
                db.getNotes(response)
                    .then(responseData => {
                        res.status(200).json(responseData)
                    })
                    .catch(error =>{
                        res.status(500).json({ error : error })
                    })
            }

        })
        .catch( error =>{
            res.status(500).json({ error : error })
    })
    
});
app.put('/api/notes/:id', (req, res) => {
    const { id } = req.param
    const { title , body } = req.body
    const user = { title, body }
    db.editeNote(id, user)
        .then(response => {
            res.status(500).json(response)
        })
});

app.delete('/api/notes/:id', (req, res) => {
    const { id } = req.param
      db.deleteNote(id)
        .then( response => {
            res.status(200).json(response)
        })
        .catch( error => {
            res.status(500).json(error)
        })
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});

//Run app, then load http://localhost:8000 in a browser to see the output.