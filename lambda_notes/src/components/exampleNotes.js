const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

const server = express();
let nextId = 10;

function getNewId() {
    return nextId++;
}

server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
    res.status(422);
    res.json({ Error: msg });
    return;
};

let notes = [
    {
        id: 1,
        title: "Note Title",
        text: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis..."
    },
    {
        id: 2,
        title: "Note Title",
        text: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis..."
    },
    {
        id: 3,
        title: "Note Title",
        text: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis..."
    },
    {
        id: 4,
        title: "Note Title",
        text: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis..."
    },
    {
        id: 5,
        title: "Note Title",
        text: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis..."
    },
    {
        id: 6,
        title: "Note Title",
        text: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis..."
    },
    {
        id: 7,
        title: "Note Title",
        text: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis..."
    },
    {
        id: 8,
        title: "Note Title",
        text: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis..."
    },
    {
        id: 9,
        title: "Note Title",
        text: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis..."
    }
];

server.get('/notes', (req, res) => {
    res.json(notes);

    server.post('/notes', (req, res) => {
        const { id, title, text } = req.body;
        const newNote = { title, text, id: nextId };
         if (!id || !title || !text) {
            return sendUserError(
                'No Notes.',
                res
            )
        };
    });
});

