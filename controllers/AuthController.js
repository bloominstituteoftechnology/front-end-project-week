const router = require('express').Router();
require("dotenv").config();
const jwt = require('jsonwebtoken');
const User = require('../schemas/AuthSchema');

//unrestricted
//helper function to generate token
const generateToken = (user) => { 
    const options = {
        expiresIn: "1h",
    };
    const payload = {name: user.username };
    const secret = process.env.SECRET;
    return jwt.sign(payload, secret, options);
};


const postRegister = (req, res) => { //this works
    console.log(req.body);
    User
        .create(req.body)
        .then((user) => {
        const token = generateToken(user);

        res.status(201).json({username: user.username, token});
    })
    .catch(err => {
        res.status(500).json({Error: err.message});
    });
};

const postLogin = (req, res) => { //this works
    const { username, password } = req.body;
    User
        .findOne( { username })
        .then(user => {
            if(!user){
                res.status(401).json({Error: `username is not in our database. Please try again or register.`})
            }
            else{ 
                user
                    .validatePassword(password)
                    .then(passwordsMatch => {
                        if(passwordsMatch){
                            const token = generateToken(user);
                            res.status(200).json({message: `Welcome, ${user.username}`, token});
                        }
                        else{
                            res.status(401).json({Error: "Invalid password"});
                        }
                    })
                    .catch(err => {
                        res.status(500).json({Error: err.message});
                    });
            }
        })
    };

router.route('/login') // "/api/auth/login"
    .post(postLogin);

router.route('/register') // "/api/auth/register"
    .post(postRegister);

module.exports = router;