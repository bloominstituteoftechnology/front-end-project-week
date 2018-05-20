const express = require('express');
const cors = require('cors');
const port = 7777;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let notes = [
  {
    id: 1,
    title: 'Note',
    body: 'Bacon ipsum dolor amet turducken kevin cow ham doner. Short ribs beef ribs pork turkey pork loin. Kevin beef ribs pork loin fatback swine biltong capicola pancetta salami chuck brisket short ribs bresaola. Ham hock capicola shoulder, meatloaf turducken chuck meatball. Tail leberkas cupim, capicola picanha boudin meatloaf swine jowl ham tenderloin cow strip steak ball tip. Pork loin ribeye kevin bresaola fatback cupim short loin biltong ham.'
  },
  {
    id: 2,
    title: 'Note',
    body: 'Bacon ipsum dolor amet turducken kevin cow ham doner. Short ribs beef ribs pork turkey pork loin. Kevin beef ribs pork loin fatback swine biltong capicola pancetta salami chuck brisket short ribs bresaola. Ham hock capicola shoulder, meatloaf turducken chuck meatball. Tail leberkas cupim, capicola picanha boudin meatloaf swine jowl ham tenderloin cow strip steak ball tip. Pork loin ribeye kevin bresaola fatback cupim short loin biltong ham.'
  },
  {
    id: 3,
    title: 'Note',
    body: 'Bacon ipsum dolor amet turducken kevin cow ham doner. Short ribs beef ribs pork turkey pork loin. Kevin beef ribs pork loin fatback swine biltong capicola pancetta salami chuck brisket short ribs bresaola. Ham hock capicola shoulder, meatloaf turducken chuck meatball. Tail leberkas cupim, capicola picanha boudin meatloaf swine jowl ham tenderloin cow strip steak ball tip. Pork loin ribeye kevin bresaola fatback cupim short loin biltong ham.'
  },
  {
    id: 4,
    title: 'Note',
    body: 'Bacon ipsum dolor amet turducken kevin cow ham doner. Short ribs beef ribs pork turkey pork loin. Kevin beef ribs pork loin fatback swine biltong capicola pancetta salami chuck brisket short ribs bresaola. Ham hock capicola shoulder, meatloaf turducken chuck meatball. Tail leberkas cupim, capicola picanha boudin meatloaf swine jowl ham tenderloin cow strip steak ball tip. Pork loin ribeye kevin bresaola fatback cupim short loin biltong ham.'
  },
  {
    id: 5,
    title: 'Note',
    body: 'Bacon ipsum dolor amet turducken kevin cow ham doner. Short ribs beef ribs pork turkey pork loin. Kevin beef ribs pork loin fatback swine biltong capicola pancetta salami chuck brisket short ribs bresaola. Ham hock capicola shoulder, meatloaf turducken chuck meatball. Tail leberkas cupim, capicola picanha boudin meatloaf swine jowl ham tenderloin cow strip steak ball tip. Pork loin ribeye kevin bresaola fatback cupim short loin biltong ham.'
  },
  {
    id: 6,
    title: 'Note',
    body: 'Bacon ipsum dolor amet turducken kevin cow ham doner. Short ribs beef ribs pork turkey pork loin. Kevin beef ribs pork loin fatback swine biltong capicola pancetta salami chuck brisket short ribs bresaola. Ham hock capicola shoulder, meatloaf turducken chuck meatball. Tail leberkas cupim, capicola picanha boudin meatloaf swine jowl ham tenderloin cow strip steak ball tip. Pork loin ribeye kevin bresaola fatback cupim short loin biltong ham.'
  },
  {
    id: 7,
    title: 'Note',
    body: 'Bacon ipsum dolor amet turducken kevin cow ham doner. Short ribs beef ribs pork turkey pork loin. Kevin beef ribs pork loin fatback swine biltong capicola pancetta salami chuck brisket short ribs bresaola. Ham hock capicola shoulder, meatloaf turducken chuck meatball. Tail leberkas cupim, capicola picanha boudin meatloaf swine jowl ham tenderloin cow strip steak ball tip. Pork loin ribeye kevin bresaola fatback cupim short loin biltong ham.'
  },
  {
    id: 8,
    title: 'Note',
    body: 'Bacon ipsum dolor amet turducken kevin cow ham doner. Short ribs beef ribs pork turkey pork loin. Kevin beef ribs pork loin fatback swine biltong capicola pancetta salami chuck brisket short ribs bresaola. Ham hock capicola shoulder, meatloaf turducken chuck meatball. Tail leberkas cupim, capicola picanha boudin meatloaf swine jowl ham tenderloin cow strip steak ball tip. Pork loin ribeye kevin bresaola fatback cupim short loin biltong ham.'
  },
  {
    id: 9,
    title: 'Note',
    body: 'Bacon ipsum dolor amet turducken kevin cow ham doner. Short ribs beef ribs pork turkey pork loin. Kevin beef ribs pork loin fatback swine biltong capicola pancetta salami chuck brisket short ribs bresaola. Ham hock capicola shoulder, meatloaf turducken chuck meatball. Tail leberkas cupim, capicola picanha boudin meatloaf swine jowl ham tenderloin cow strip steak ball tip. Pork loin ribeye kevin bresaola fatback cupim short loin biltong ham.'
  }
];

server.get('/notes', (req, res) => {
  res.json(notes);
});
let noteId = 10;

server.post('/notes', (req, res) => {
  const { title, body } = req.body;
  const newNote = { title, body, id: noteId };
  if (!title || !body) {
    return sendUserError(
      'Title and Body both required',
      res
    );
  }
  const findNoteByTitle = note => {
    return note.title === title;
  };
  if (notes.find(findNoteByTitle)) {
    return sendUserError(
      `Title already exists.`,
      res
    );
  }

  notes.push(newNote);
  noteId++;
  res.json(notes);
});

server.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  const findNoteById = note => {
    return note.id == id;
  };
  const foundNote = notes.find(findNoteById);
  if (!foundNote) {
    return sendUserError('No note with that Id', res);
  } else {
    if (title) foundNote.title = title;
    if (body) foundNote.body = body;
    res.json(foundNote);
  }
});

server.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const foundNote = notes.find(note => note.id == id);

  if (foundNote) {
    const NoteRemoved = { ...foundNote };
    notes = notes.filter(note => note.id != id);
    res.status(200).json({ NoteRemoved });
  } else {
    sendUserError('No note with that Id exists in the Database', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
