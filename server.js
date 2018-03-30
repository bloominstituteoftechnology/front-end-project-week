const express = require('express');
const cors = require('cors');
const port = 5000;
const server = express();
server.use(express.json());
server.use(cors());
const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};
let nextId = 10;
const getNextId = () => {
  return ++nextId;
};
// const gen = () => {
//   const res = [];
//   for(let i=0; i < 10; i++){
//     nextId++;
//     res.push({id: nextId, title: `This is a title for ${i + 1}`, content: `Lorem Ipsum is simply dummy
//     text of the printing and typesetting industry. Lorem Ipsum has been the
//     industry's standard dummy text ever since the 1500s, when an unknown printer
//      took a galley of type and scrambled it to make a type specimen book.`});
//   }
//   return res;
// }
//
// const notes = gen();
let users = [
  {
    id: 1,
    name: `Edward Manda`,
    username: `emukupa`,
    password: `secret`
  },

  {
    id: 2,
    name: `Donald Trump`,
    username:`trump`,
    password: `huge`
  },
  {
    id: 1,
    name: `Josh Knell`,
    username: `josh`,
    password: `password`
  }
];

let notes = [
{
id: 1,
user: {
  author: `Edward Manda`,
  userId: 1,
},
title: "Javascript Lessons",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 2,
user: {
  author: `Edward Manda`,
  userId: 1,
},
title: "CSS tricks",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 3,
title: "Huge Moves",
user: {
  author: `Donald Trump`,
  userId: 2,
},
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 4,
user: {
  author: `Josh Knell`,
  userId: 3,
},
title: "Master HTML",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 5,
user: {
  author: `Donald Trump`,
  userId: 2,
},
title: "Talking about chaos",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 6,
user: {
  author: `Edward Manda`,
  userId: 1,
},
title: "How to think",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 7,
user: {
  author: `Donald Trump`,
  userId: 2,
},
title: "Think big",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 8,
user: {
  author: `John Knell`,
  userId: 3,
},
title: "Laugh it out",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 9,
user: {
  author: `Donald Trump`,
  userId: 2,
},
title: "How to win",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 10,
user: {
  author: `Donald Trump`,
  userId: 2,
},
title: "Nick Naming",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}
];

server.get('/notes', (req, res) => {
  res.json(notes);
});

server.get('/notes/:id', (req, res) => {
	const note = notes.filter(note => note.id.toString() === req.params.id)[0];
	res.status(200).json(note);
});

server.post('/notes', (req, res) => {
  const { title, content, user } = req.body;
  const id = getNextId();
  const newNote = { id:id, title:title, content:content, user: user };
  notes.push(newNote);
  nextId++;
  res.json(notes);
});

server.put('/notes/:id', (req, res) => {
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

// server.delete('/notes/:id', (req, res) => {
//   const { id } = req.params;
//   const foundNote = notes.find(note => (note.id).toString() === id.toString());
//   console.log(id)
//   if (foundNote) {
//     const noteRemoved = { ...foundNote };
//     notes = notes.filter(note => (note.id).toString() != id.toString());
//     res.status(200).json({ noteRemoved });
//   } else {
//     sendUserError('No note by that ID exists in the note DB', res);
//   }
// });

server.delete('/notes/:id', (req, res) => {
  const { id } = req.params;

  notes = notes.filter(note => note.id !== Number(id));

  res.send(notes);
});


server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});