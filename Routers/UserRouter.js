const express = require('express');
const router = express.Router()
const User = require('../Database/Users/User')
const jwt = require('jsonwebtoken')



router.post("/", (req, res) => {
    const newUser = req.body; 
    const user = new User(newUser);

    user.save().then(user => {
        res.status(200).json(user)
    }).catch(err => {
        console.log(err)
        res.status(500).json({Message: "Error creating user"})
    })
});

router.post("/login", (req, res) => {
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

module.exports = router;