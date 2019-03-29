
const router = require("express").Router();
const Notes = require("../schemas/NoteSchema");
const fakerData = require("../controllers/FakerData");


const sendUserError = (status, message, res) => {
    res.status(status).json({Error: message});
    return;
}

const getFakerData = (req, res) => {
    if(fakerData() === undefined) {
        sendUserError(400, "No fakerdata present", res)
    } else {
        res.send({FakerData: fakerData()});
    }
};

const get = (req, res) => {
    Notes.find()
        .then(notes => {
            notes.length === 0 ? sendUserError(404, "No notes found", res) :
                res.status(200).json(notes);
        })
        .catch(error => {
            sendUserError(500, "There was an error in retrieving notes", error);
        });
}

const post = (req, res) => {
    const { title, body } = req.body;
    if(!title || !body) {
        sendUserError(400, "Note must have title and body")
    } else {
        Notes.create({title, body})
            .then(note => {
                if(!note) {
                    sendUserError(404, "Note note found", res);
                } else {
                    res.status(200).json(note);
                }
            })
            .catch(error => {
                sendUserError(500, "There was an error in POSTing note", res);
            });
    }
};

const getId = (req, res) => {
    const { id } = req.params;
    if(!id) {
        sendUserError(400, "The specified id does not exist", res);
    }
    else {
        Notes.findById(id)
            .then(note => {
                note.length === 0 ? sendUserError(404, "Note could not be found", res) : res.status(200).json(note);
            })
            .catch(error => {
                sendUserError(500, error.message, res);
            });
    }
};

const deleteId = (req, res) => {
    const { id } = req.params;
    if(!id) {
        sendUserError(400, "The specified ID does not exist", res);
    }
    else {
        Notes.findByIdAndRemove(id)
            .then(note => {
                res.status(200).json({Success: `${id} has been removed from database`, note});
            })
            .catch(error => {
                sendUserError(500, {Error: error.message}, res);
            });
    }
};

const putId = (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body;
    if(!id) {
        sendUserError(400, "The specified id does not exist", res);
    }
    else if(!title || !body){
        sendUserError(400, "Note must include title and body");
    }
    else {
        Notes.findByIdAndUpdate(id, {title, body})
            .then(note => {
                res.status(200).json({Success: `${id} has been updated`, note});
            })
            .catch(error => {
                sendUserError(500, {Error: error.message}. res);
            });
    }
};


router.route("/")
    .get(get)
    .post(post);

router.route("/faker")
    .get(getFakerData)

router.route("/:id")
    .get(getId)
    .delete(deleteId)
    .put(putId);

module.exports = router;