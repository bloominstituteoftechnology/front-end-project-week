const express = require('express');
const cors = require('cors');
const port = 3333;

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
    tags: [],
    _id: '1',
    title: 'Thanks, Dustin!',
    textBody:
      "I can't believe that you would come visit us!! :Dsad\nsasdasdasdas\n\nlol he didn't\n",
    __v: 0
  },
  {
    tags: [],
    _id: '2',
    title: "DON'T DELETE",
    textBody:
      "Despite the constant negative ipsum covfefe. The best taco bowls are made in Trump Tower Grill. I love Hispanics!I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again. When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words. We have so many things that we have to do better... and certainly ipsum is one of them.  DID SOMEONE SAY TACOS!?!!",
    __v: 0
  },
  {
    tags: [],
    _id: '3',
    title: 'redux thunk',
    textBody: 'async me',
    __v: 0
  },
  {
    tags: [],
    _id: '4',
    title: "notes are fun :'(",
    textBody: 'womp notes are ',
    __v: 0
  },
  {
    tags: [],
    _id: '5',
    title: 'Heey',
    textBody: 'Where did my notes go?',
    __v: 0
  },
  {
    tags: [],
    _id: '6',
    title: 'I Love Not Redux',
    textBody:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    __v: 0
  },
  {
    tags: [],
    _id: '7',
    title: 'Another Note',
    textBody:
      "Yeah-eh-heah\nYou are my fire\nThe one desire\nBelieve when I say\nI want it that way\nBut we are two worlds apart\nCan't reach to your heart\nWhen you say\nThat I want it that way\nTell me why\nAin't nothin' but a heartache\nTell me why\nAin't nothin' but a mistake\nTell me why\nI never want to hear you say\nI want it that way\nAm I your fire?\nYour one desire\nYes I know it's too late\nBut I want it that way\nTell me why\nAin't nothin' but a heartache\nTell me why\nAin't nothin' but a mistake\nTell me why\nI never want to hear you say\nI want it that way\nNow I can see that we've fallen apart\nFrom the way that it used to be Yeah\nNo matter the distance\nI want you to know\nThat deep down inside of me\nYou are my fire\nThe one desire\nYou are (you are you are you are)\nDon't want to hear you say\nAin't…",
    __v: 0
  },
  {
    tags: [],
    _id: '8',
    title: 'Any boy got any more of dem notes?!',
    textBody: 'I GOT THE ITCH',
    __v: 0
  },
  {
    tags: [],
    _id: '9',
    title: 'TRE <- Who did this?',
    textBody: 'oops <- This is not OKAY!!!22 ',
    __v: 0
  },
  {
    tags: [],
    _id: '10',
    title: 'I Just Need To Edit More',
    textBody: 'tenfeels OK! -> Okay....22',
    __v: 0
  },
  {
    tags: [],
    _id: '11',
    title: 'feed me',
    textBody:
      'moar notes... what you want? :D Yassss got that pixel perfect2222',
    __v: 0
  },
  {
    tags: [],
    _id: '12',
    title: 'dead',
    textBody:
      "my drag and drop won't persist. axios hates me222\n\nThat's a bummer man. At least its the righteous hate. The only kind of hate a server can give. ",
    __v: 0
  },
  {
    tags: [],
    _id: '13',
    title: 'Note Title',
    textBody:
      'GitHub flavored markdown is enabled; Click the preview button to see the results\n\nLorem ipsum dolor sit amet, luctus feugiat in proin suspendisse suspendisse nisl, mollis faucibus ac sodales dui. Sed eu lobortis. Aliquam odio gravida placerat malesuada in vehicula, eleifend adipiscing. Sit sed vitae elit nunc lacinia, erat quis amet elit eget velit pede, blandit mi vel nullam vivamus justo, dictum dolor vehicula. Dui in, est est, volutpat interdum mattis diam, a ut dolor volutpat, consectetuer torquent velit eget.\n\nMarkdown Example\n===============\n\nThis is the raw markdown used to generate the below web content.\n\nBulleted List\n-------------\n\n* Foo\n* Bar\n\nNumbered List\n-------------\n\n1. Foo\n2. Bar\n\nFormatting\n----------\n\nCan be **bold** or *italic*\n\nLinks\n-----\n\nClick [here](https://cultofthepartyparrot.com/) to go somewhere.',
    __v: 0
  },
  {
    tags: [],
    _id: '14',
    title: 'testing123',
    textBody: 'testing1234',
    __v: 0
  }
];
server.get('/note/get/all', (req, res) => {
  res.json(notes);
});

server.get('/note/get/:id', (req, res) => {
  const { id } = req.params;
  const findNoteById = note => {
    return note._id == id;
  };
  const foundNote = notes.find(findNoteById);
  if (!foundNote) {
    return sendUserError('No note found by that ID', res);
  } else {
    res.json(foundNote);
  }
});

let noteId = (Number(notes[notes.length - 1]._id) + 1).toString();

server.post('/note/create', (req, res) => {
  const { title, textBody } = req.body;
  const newNote = { tags: [], _id: noteId, title, textBody, __v: 0 };
  if (!title || !textBody) {
    return sendUserError('Missing title/textBody', res);
  }
  const findNoteByTitle = note => {
    return note.title === title;
  };
  if (notes.find(findNoteByTitle)) {
    return sendUserError(
      `This note's title(${title}) already exists in the notes DB.`,
      res
    );
  }

  notes.push(newNote);
  noteId++;
  res.json(notes);
});

server.put('/note/edit/:id', (req, res) => {
  const { id } = req.params;
  const { title, textBody } = req.body;
  const findNoteById = note => {
    return note._id == id;
  };
  const foundNote = notes.find(findNoteById);
  if (!foundNote) {
    return sendUserError('No note found by that ID', res);
  } else {
    if (title) foundNote.title = title;
    if (textBody) foundNote.textBody = textBody;
    res.json(notes);
  }
});

server.delete('/note/delete/:id', (req, res) => {
  const { id } = req.params;
  const foundNote = notes.find(note => note._id == id);

  if (foundNote) {
    const NoteRemoved = { ...foundNote };
    notes = notes.filter(note => note._id != id);
    res.status(200).json(notes);
  } else {
    sendUserError('No note by that ID exists in the notes DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
