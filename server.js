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
let notes = [
{
id: 1,
title: "This is a title for 1",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 2,
title: "This is a title for 2",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 3,
title: "This is a title for 3",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 4,
title: "This is a title for 4",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 5,
title: "This is a title for 5",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 6,
title: "This is a title for 6",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 7,
title: "This is a title for 7",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 8,
title: "This is a title for 8",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 9,
title: "This is a title for 9",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
id: 10,
title: "This is a title for 10",
content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}
];
server.get('/notes', (req, res) => {
  res.json(notes);
});

server.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const id = getNextId();
  const newNote = { id:id, title:title, content:content };
  notes.push(newNote);
  nextId++;
  res.json(notes);
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