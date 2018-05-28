//Modules
const express = require('express');
const server = express();
const mongoose = require('mongoose');

//Database
let uri = 'mongodb://2940cristian:dance360@ds235840.mlab.com:35840/noteslambda';
mongoose.connect(uri, function(err, success) {
    if(err) throw err;
    console.log("Connected to DB")
})
//Middleware
server.use(express.json());


//Routers
server.get("/", (req,res) => {res.send('API RUNNING')})

server.listen(5000, () => {console.log("Listening on port 5000")})