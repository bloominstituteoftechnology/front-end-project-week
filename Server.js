//Modules
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require("./Routers/UserRouter")
const notesRouter = require("./Routers/NotesRouter")
//Database
let uri = 'mongodb://2940cristian:dance360@ds235840.mlab.com:35840/noteslambda';
mongoose.connect(uri, function(err, success) {
    if(err) throw err;
    console.log("Connected to DB")
})

//Middleware
server.use(express.json());
server.use(cors());




//Routers
server.get("/", (req,res) => {res.send('API RUNNING')})

//NOTES ROUTERS
server.use('/notes', notesRouter)

//USER ROUTER

server.use('/users', userRouter)



server.listen(process.env.PORT || 5000);

