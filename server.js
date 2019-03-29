const express = require("express");
require("dotenv").config();
const server = express();

const port=process.env.PORT;

const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const noteController = require("./controllers/NoteController");
const note = require("./controllers/FakerData");

const database = "notesdb";

//insert database connection here

mongoose.connect(`mongodb://localhost:27017/${database}`, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(response => {
        console.log(`Connected to ${response.connection.name}`);
    })
    .catch(error => {
        console.log({Error: err.message})
    })

//middleware

    //local

    //restricted function for auth

    const restricted = (req, res, next) => {
        const token = req.headers.authorization;
        const secret = process.env.SECRET;

        //if a token exists...let's verify it.
        if(token){
            jwt.verify(token, secret, (err, decodedToken) => {
                if (err) {
                    return res.status(401).json({message: 'Token was not decoded', err});
                }
                next();
            });
        } else {
            //error in retrieving token
            res.send({message: "Error in retrieving token"});
        }
    }

//global middleware

const corsOptions = {
    origin: 'http://localhost:3000'
};

server.use(express.json());
server.use(helmet());
server.use(cors(corsOptions));

server.use("/api/notes", noteController);

server.get("/", (req, res) => {
res.status(200).json({SanityCheck: note()});
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})



