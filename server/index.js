const express = require('express');
const app = express();
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./database/db')


//MiddleWare
app.use(express.json());
app.use(helmet());
app.use(logger('dev'));
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

app.get('/api/notes/:id', (req, res) => {
    const { id } = req.params
    db.getNotes(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error =>{
            res.status(500).json({ error : error})
        })
});

app.post('/api/notes', (req, res) => {
    const { title, body } = req.body
    const note = { title , body }
    db.addNote( note )
        .then( responseId =>{
            if(responseId){
                db.getNotes(responseId[0])
                    .then(responseData => {
                        console.log(responseData)
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
    const { id } = req.params
    const { title , body } = req.body
    const user = { title, body }
    db.editeNote(id, user)
        .then(response => {
            if(response){
                db.getNotes( id )
                    .then( responseData =>{
                        res.status(200).json(responseData)
                    })
                    .catch( error =>{
                        res.status(500).json({error : error })
                    })
            }
            
        })
        .catch(error =>{
            res.status(500).json({ error : error })
        })
});

app.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params
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