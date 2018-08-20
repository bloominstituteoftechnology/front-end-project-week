// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const port = 3333;

// const server = express();
// server.use(bodyParser.json());
// server.use(cors());

// const sendUserError = (msg, res) => {
//   res.status(422);
//   res.json({ Error: msg });
//   return;
// };

// let notes = [
//   {
//     id: 0,
//     title: 'E Note Title',
//     content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'
//   }
//   {
//     id: 0,
//     title: 'D Note Title',
//     content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'
//   }
//   {
//     id: 0,
//     title: 'C Note Title That Is Longer',
//     content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'
//   }
//   {
//     id: 0,
//     title: 'F Note Title',
//     content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'
//   }
//   {
//     id: 0,
//     title: 'A Note Title',
//     content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'
//   }
//   {
//     id: 0,
//     title: 'B Note Title',
//     content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'
//   }
// ];
// server.get('/notes', (req, res) => {
//   res.json(notes);
// });
// let noteId = 1;

// server.post('/notes', (req, res) => {
//   const { title, content } = req.body;
//   const newNote = { title, content, id: noteId };
//   if (!title || !content) {
//     return sendUserError(
//       'Oops! Title/Content are all required to create a note in the note DB.',
//       res
//     );
//   }
//   const findNoteByTitle = note => {
//     return note.title === title;
//   };
//   if (notes.find(findNoteByTitle)) {
//     return sendUserError(
//       `Oops! ${title} already exists in the note DB.`,
//       res
//     );
//   }

//   notes.push(newNote);
//   noteId++;
//   res.json(notes);
// });

// server.put('/notes/:id', (req, res) => {
//   const { id } = req.params;
//   const { title, content } = req.body;
//   const findNoteById = note => {
//     return note.id == id;
//   };
//   const foundNote = notes.find(findNoteById);
//   if (!foundNote) {
//     return sendUserError('No Note found by that ID', res);
//   } else {
//     if (title) foundNote.title = title;
//     if (content) foundNote.content = content;
//     res.json(notes);
//   }
// });

// server.delete('/notes/:id', (req, res) => {
//   const { id } = req.params;
//   const foundNote = notes.find(note => note.id == id);

//   if (foundNote) {
//     const NoteRemoved = { ...foundNote };
//     notes = notes.filter(note => note.id != id);
//     res.status(200).json(notes);
//   } else {
//     sendUserError('No note by that ID exists in the note DB', res);
//   }
// });

// server.listen(port, err => {
//   if (err) console.log(err);
//   console.log(`server is listening on port ${port}`);
// });
