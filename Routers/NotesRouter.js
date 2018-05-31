const express = require('express');
const router = express.Router()
const jwt = require("jsonwebtoken");
const Note = require('../Database/Notes/Note')


const validateToken = (req, res, next) => {
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
          next();
        }
      });
    }
  };



router.get("/", validateToken, (req, res) => {
    Note.find().then(notes => {
        res.status(200).json(notes)
    }).catch(err => {
        res.status(404).json(err)
    })
})

router.post("/", (req, res) => {
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

router.get("/:id",  (req, res) => {
    const id = req.params.id;

    Note.findById(id).then(note => {
        res.status(200).json(note)
    }).catch(err => {
        res.status(404).json({Message: "User cannot be found"})
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    Note.findByIdAndRemove(id).then(deleted => {
        res.status(200).json({Message: "Note has been deleted"})
    }).catch(err => {
        res.status(404).json({Message: "User with that Id could not be found"})
    })
})

router.put("/:id", (req, res) => {
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

module.exports = router;