const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let notes = [
    {
        "tags": ["tag", "otherTag"],
        "title": "Note Title",
        "textBody": "Note Body 1",
        "id": "0",
    },
    {
      "tags": ["tag", "otherTag"],
      "title": "Note Title",
      "textBody": "Note Body 2",
      "id": "1",
    },
];
server.get('/notes', (req, res) => {
  res.json(notes);
});
let noteId = 2;

server.get('/note/:id', (req, res) => {
  const id = req.params.id;
  findById(id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => console.log(err))
})

findById = (id) => {
  return new Promise((res, rej) => {
    let index = notes.findIndex(note => Number(note.id) === Number(id))
    res(notes[index]);
  })
}


server.post('/notes', (req, res) => {
  const { title, body, tags } = req.body;
  const newNote = {title, textBody: body, id: noteId, tags};
  if (!title || !body) {
    return sendUserError(
      'Title and Body are required to create a note in note DB.',
      res
    );
  }
  
  // const findSmurfByName = smurf => {
  //   return smurf.name === name;
  // };
  // if (notes.find(findSmurfByName)) {
  //   return sendUserError(
  //     `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
  //     res
  //   );
  // }

  notes.push(newNote);
  noteId++;
  res.json(notes);
});

server.put('/note/:id', (req, res) => {
  const { id } = req.params;
  const { title, textBody } = req.body;
  const findByNoteId = note => {
    return note.id == id;
  };

  const foundNote = notes.find(findByNoteId);
  if (!foundNote) {
    return sendUserError('No Note found by that ID', res);
  } else {
    if (title) foundNote.title = title;
    if (textBody) foundNote.textBody = textBody;
    res.json(notes);
  }
});

server.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const foundNote = notes.find(note => note.id == id);

  if (foundNote) {
    const noteFound = { ...foundNote };
    notes = notes.filter(note => note.id != id);
    res.status(200).json(notes);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
