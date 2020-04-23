const express = require("express");
require("dotenv").config();
const server = express();

const port=process.env.PORT;

const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const noteController = require("./controllers/NoteController");
const authController = require("./controllers/AuthController");
const note = require("./controllers/FakerData");

const devDatabase = process.env.DEVDB;
const prodDatabase = process.env.PRODDB;
const username = process.env.USERNAME;
const password = process.env.PW;


//insert database connection here
if(process.env.NODE_ENV === "development") {
    mongoose.connect(`mongodb://localhost:27017/${devDatabase}`, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true  } )
    .then(response => {
        console.log(`Connected to ${response.connection.name}`);
    })
    .catch(error => {
        console.log({Error: error.message})
    })
}

else {
    console.log(username);
    //mongodb://<dbuser>:<dbpassword>@ds229118.mlab.com:29118/heroku_v30jk6j6
    mongoose.connect(process.env.MONGOLAB_BROWN_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true }  )
    .then(response => {

        console.log(`Connected to ${response.connection.name}`);
    })
    .catch(error => {
        console.log({Error: error.message})
    })
}

//middleware

    //local

    //restricted function for auth

    const restricted = (req, res, next) => {
        const token = req.headers.authorization;
        const secret = process.env.SECRET;
        console.log("\n\n\ntoken: " + token + "\n\n\nsecret:", secret);
        //if a token exists...let's verify it.
        if(token){
            jwt.verify(token, secret, (err, decodedToken) => {
                if (err) {
                    return res.status(401).json({message: 'Token was not decoded', err});
                }
                console.log(decodedToken);
                next();
            });
        } else {
            //error in retrieving token
            res.send({message: "Error in retrieving token"});
        }
    }

//global middleware
//TODO: read up more on cors to fix the options
const corsOptions = {
    origin: ['http://localhost:3000', 'https://notepen.netlify.app']
};

server.use(express.json());
server.use(helmet());
server.use(cors(corsOptions));

server.use("/api/notes", noteController);
server.use("/api/auth", authController);

server.get("/", (req, res) => {
res.status(200).json({SanityCheck: "Sanity check works..."});
})

server.get("/auth", restricted, (req, res) => {
    res.status(200).json({AuthSanityCheck: "You have the secret!"})
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})



