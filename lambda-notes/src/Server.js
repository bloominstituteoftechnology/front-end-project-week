const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let nextId = 6;

let friends = [
    {
        id: 1,
        name: 'Ben',
        age: 30,
        email: 'ben@lambdaschool.com',
    },
    {
        id: 2,
        name: 'Austen',
        age: 45,
        email: 'austen@lambdaschool.com',
    },
    {
        id: 3,
        name: 'Ryan',
        age: 15,
        email: 'ryan@lambdaschool.com',
    },
    {
        id: 4,
        name: 'Sean',
        age: 35,
        email: 'sean@lambdaschool.com',
    },
    {
        id: 5,
        name: 'Michelle',
        age: 67,
        email: 'michelle@gmail.com',
    },
];

app.use(bodyParser.json());

app.use(cors());

app.get('/api/friends', (req, res) => {
    setTimeout(() => {
        res.send(friends);
    }, 1000);
});

app.get('/api/friends/:id', (req, res) => {
    const friend = friends.find(f => f.id == req.params.id);

    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).send({ msg: 'Friend not found' });
    }
});

app.post('/api/friends', (req, res) => {
    const friend = { id: getNextId(), ...req.body };

    friends = [...friends, friend];

    res.send(friends);
});

app.put('/api/friends/:id', (req, res) => {
    const { id } = req.params;

    const friendIndex = friends.findIndex(f => f.id == id);

    if (friendIndex > -1) {
        const friend = { ...friends[friendIndex], ...req.body };

        friends = [
            ...friends.slice(0, friendIndex),
            friend,
            ...friends.slice(friendIndex + 1),
        ];
        res.send(friends);
    } else {
        res.status(404).send({ msg: 'Friend not found' });
    }
});

app.delete('/api/friends/:id', (req, res) => {
    const { id } = req.params;

    friends = friends.filter(f => f.id !== Number(id));

    res.send(friends);
});

function getNextId() {
    return nextId++;
}

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});