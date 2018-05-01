const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let nextId = 6;

let notes = [
    {
        id: 1,
        title: 'Raps',
        content: 'lyrics to a song',
    },
    {
        id: 2,
        title: 'Affirmanion',
        content: 'Daily Affirmantion: I am going to win ',
    },
    {
        id: 3,
        title: 'No Title',
        content: 'Stevie owes me 2 BTC',
    },
    {
        id: 4,
        title: 'Poems',
        content: 'Today starting out slow',
    },
    {
        id: 5,
        title: 'The Place to Be',
        content: 'this ish the place to be',
    }
];

app.use(bodyParser.json());

app.use(cors());

app.get('/notes', (req, res) => {
    setTimeout(() => {
        res.send(notes);
    }, 1000);
});

app.get('/notes/:id', (req, res) => {
    const note = notes.find(n => n.id == req.params.id);

    if (note) {
        res.status(200).json(note);
    } else {
        res.status(404).send({ msg: 'Note not found' });
    }
});

app.post('/notes', (req, res) => {
    const note = { id: getNextId(), ...req.body };

    notes = [...notes, note];

    res.send(notes);
});

app.put('/notes/:id', (req, res) => {
    const { id } = req.params;

    const noteIndex = notes.findIndex(f => f.id == id);

    if (noteIndex > -1) {
        const note = { ...notes[noteIndex], ...req.body };

        notes = [
            ...notes.slice(0, noteIndex),
            note,
            ...notes.slice(noteIndex + 1),
        ];
        res.send(notes);
    } else {
        res.status(404).send({ msg: 'Note not found' });
    }
});

app.delete('/notes/:id', (req, res) => {
    const { id } = req.params;

    notes = notes.filter(f => f.id !== Number(id));

    res.send(notes);
});

function getNextId() {
    return nextId++;
}

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
