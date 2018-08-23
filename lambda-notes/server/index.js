const express = require('express');
const app = express();
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./database/db')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


//MiddleWare
app.use(express.json());
app.use(helmet());
app.use(logger('dev'));
app.use(cors());

const secret = 'this must stay hidden'

// Token Generator
function generateToken(user){
    const payload = {
        username : user.username
    }

    options = {
        expiresIn : "1 days"
    }

    return jwt.sign(payload, secret, options)
}

app.get('/', (req, res) => {
    res.send("Welcome To Lambda School Back-End Project");
});
// NOTES MODEL
app.get('/api/notes', (req, res) => {
    db.notesModel.getNotes()
        .then(response => {
           res.status(200).json(response)
        })
        .catch( error => {
            res.status(500).json(error)
        })
});

app.get('/api/notes/:id', protected , (req, res) => {
    const { id } = req.params
    db.notesModel.getNotes(id)
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
    db.notesModel.addNote( note )
        .then( responseId =>{
            if(responseId){
                db.notesModel.getNotes(responseId[0])
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
    console.log( id  )
    const { title , body } = req.body
    const user = { title, body }
    console.log(user)
    db.notesModel.editeNote(id, user)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error =>{
            res.status(500).json({ error : error })
        })
});

app.delete('/api/notes/:id',protected, (req, res) => {
    const { id } = req.params
      db.notesModel.deleteNote(id)
        .then( response => {
            res.status(200).json(response)
        })
        .catch( error => {
            res.status(500).json(error)
        })
});
//########################################################################
//USERS Model

function protected( req, res, next){
    const token = req.headers.authorization
    if(token){
        jwt.verify(token ,secret , (err, decodetoken) => {
            if(err){
                return res.status(401).json({ error : 'unauthorized login : invalid token' })
            }
            req.jwtToken = decodetoken
            next()
        })
    }
    else{
        return res.status(401).json({ error : 'unauthorized login : no token' })
    }
}    

app.post('/api/register', (req, res) => {
    const {first_name, last_name, email, username, password} = req.body;
    const user = { first_name, last_name, email, username, password }
    console.log(user)
    //Hasshing My Passowrd
    const hash = bcrypt.hashSync(user.password, 14 )
    user.password = hash 
    //Database Query 
    db.usersModel.addUser(user)
        .then( response => {
            if(response){
                db.usersModel.getUsers(response[0]).first()
                    .then( response => {
                        const token = generateToken(response)
                        res.status(200).json(token)
                    })
                    .catch( err => res.status(500).json({err : err}))
            }
            else{
               res.json(404).send('user not created')
            }
        })
        .catch( err =>  res.status(500).json({ error : err }))
});

app.post('/api/login', (req, res) => {
    const credentials = req.body;
    db.usersModel.getUser(credentials.username).first()
        .then( response => {
            if(response && bcrypt.compareSync(credentials.password,response.password)){
                const token = generateToken(response)
                res.status(200).json({token})
            }
            else{
                res.status(401).send('invalid credentials')
            }
        })
        .catch( err => {
            res.status(500).send('invalid credentials')
        })
});

app.get('/api/users', protected,  (req, res) => {
    console.log('token', req.jwtToken)
    db.usersModel.getUsers()
        .then( response => {
            console.log(response)
            res.status(200).json(response)
        })
        .catch( err =>{
            res.status(500).json({error : err })
        })
});


app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});

//Run app, then load http://localhost:8000 in a browser to see the output.