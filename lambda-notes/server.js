const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//insert database requirements here

const server = express();
const port=5000;

const sendUserError = (status, message, res) => {
    res.status(status).json({Error: message});
    return;
}
server.use(express.json());
server.use(helmet());
server.use(cors());


server.get("/api/notes", (req, res) =>{
    //insert database file here
    .get()
    then(response =>{
        if(response.length===0){
            sendUserError(404, "Notes information could not be found", res);
        }
        res.status(200).json(response);
    })
    .catch(err=>{
        sendUserError(500, "There was an error in retrieving notes information", res);
    });
});

server.get("/api/notes/:id", (req, res) =>{
    const { id } = req.params;
    //insert database file here
    .get(id)
    then(response =>{
        if(response.length===0){
            sendUserError(404, "The note with the specified ID could not be found", res);
        }
        res.status(200).json(response);
    })
    .catch(err=>{
        sendUserError(500, "There was an error in retrieving note information");
    });
});

server.post("/api/notes", (req, res) =>{
    const { title, body } = req.body;
    if(!title||!body){
        sendUserError(400, "Must include title and body", res);
    }
    
    //insert database here
    .insert({title, body})
    .then(response =>{
        res.status(201).json(response);
    })
    .catch(err =>{
        sendUserError(500, "There was an error in saving note to database", res);
    });
});

server.delete("/api/notes/:id", (req, res) =>{
    const { id } = req.params;
    if(!id){
        sendUserError(404, "The specified ID is not found", res);
    }
    //insertdatabase here

    .remove(id)
    .then(response =>{
        res.status(204).json(response);
    })
    .catch(err =>{
        sendUserError(500, "There was an error in deleting this note", res);
    });
});

server.put("/api/notes/:id", (req, res) =>{
    const { id } = req.params;
    const { title, body };

    //insert database here
        .get(id)
        .then(response => {
            if(!id){
                sendUserError(404, "The specified ID is not found", res);
            }
            else{
                //insert database here
                .update({title, body})
                .then(result =>{
                    res.status(200).json(result);
                })
                .catch(err =>{
                    sendUserError(500, "There was an error in updating the database", res);
                });
            }
        })
})







server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})



