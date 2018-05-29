//Modules
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const Note = require('./Database/Notes/Note');
const User = require('./Database/Users/User')
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
//Database
let uri = 'mongodb://2940cristian:dance360@ds235840.mlab.com:35840/noteslambda';
mongoose.connect(uri, function(err, success) {
    if(err) throw err;
    console.log("Connected to DB")
})

//Middleware
server.use(express.json());
server.use(cors());

const validateToken = (req, res, next) => {
    // this piece of middleware is taking the token delivered up to the server and verifying it
    // if no token is found in the header, you'll get a 422 status code
    // if token is not valid, you'll receive a 401 status code
    const token = req.headers.authorization;
    if (!token) {
      res
        .status(422)
        .json({ error: 'No authorization token found on Authorization header' });
    } else {
      jwt.verify(token, "testingSecret" , (err, decoded) => {
        if (err) {
          res
            .status(401)
            .json({ error: 'Token invalid, please login', message: err });
        } else {
          // token is valid, so continue on to the next middleware/request handler function
          next();
        }
      });
    }
  };


//Routers

//NOTES ROUTERS
server.get("/", (req,res) => {res.send('API RUNNING')})

server.get("/notes", validateToken, (req, res) => {
    Note.find().then(notes => {
        res.status(200).json(notes)
    }).catch(err => {
        res.status(404).json(err)
    })
})

server.post("/notes", (req, res) => {
    const newNote = req.body;
    const note = new Note(newNote);

    if(newNote.title.length < 1 || newNote.content.length < 1) {
        res.json({Message: "Input title and content"})
        return;
    } else {
        note.save().then(note => {
            res.status(200).json(note);
        }).catch(err => {
            res.status(500).json(err)
        })
    }
})

server.get("/notes/:id",  (req, res) => {
    const id = req.params.id;

    Note.findById(id).then(note => {
        res.status(200).json(note)
    }).catch(err => {
        res.status(404).json({Message: "User cannot be found"})
    })
})

server.delete("/notes/:id", (req, res) => {
    const id = req.params.id
    Note.findByIdAndRemove(id).then(deleted => {
        res.status(200).json({Message: "Note has been deleted"})
    }).catch(err => {
        res.status(404).json({Message: "User with that Id could not be found"})
    })
})

server.put("/notes/:id", (req, res) => {
    const id = req.params.id;
    const newNote = req.body;

    if(newNote.title.length < 1 || newNote.content.length < 1) {
        res.json({Message: "Input title and content"});
        return;
    } else {

    Note.findByIdAndUpdate(id, newNote).then(updatedNote => {
        res.status(200).json({
            Message: "Note has been updated"
        })
    }).catch(err => {
        res.status(404).json(err)
    })}
})
///////////////////////////////////////////////

//USER ROUTER

server.get("/user", (req, res) => {res.send("USERS RUNNING")})

server.get("/users", (req, res) => {
    User.find().then(users => {
        res.status(200).json(users)
    }).catch(err => {
        res.status(500).json({Message: "Error fetching users"})
    })
})

server.post("/users", (req, res) => {
    const newUser = req.body; 
    const user = new User(newUser);

    user.save().then(user => {
        res.status(200).json(user)
    }).catch(err => {
        console.log(err)
        res.status(500).json({Message: "Error creating user"})
    })
});

server.post("/users/login", (req, res) => {
    const {email, password} = req.body;

    User.findOne({email: email}, (err, user) => {
        if(err) {res.send(err)}

        user.checkPassword(password, (err, isMatch) => {
            if (err) {
                return res.status(422).json({ error: 'Passwords do not match' });
            }
            if (isMatch) {
                const token = jwt.sign({user}, "testingSecret");
                res.status(200).json({token: token})
            } 
            else {
                res.status(422).json({ error: 'passwords dont match' });
            }
        })
    })
});

server.listen(process.env.PORT || 5000);

