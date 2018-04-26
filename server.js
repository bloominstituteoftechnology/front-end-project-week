const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3141;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (message, response) => {
  response.status(422);
  response.json({ Error: message });
  return;
};

let notes = [
  {
    title: "zCustom Note #0",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 0
  },
  {
    title: "gCustom Note #1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 1
  },
  {
    title: "yCustom Note #2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 2
  },
  {
    title: "fCustom Note #3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 3
  },
  {
    title: "qCustom Note #4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 4
  },
  {
    title: "rCustom Note #5",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 5
  },
  {
    title: "aCustom Note #6",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 6
  },
  {
    title: "kCustom Note #7",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 7
  },
  {
    title: "eCustom Note #8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 8
  }
];

server.get('/notes', (request, response) => { response.json(notes) });

let noteID = 101;

server.post('/notes', (request, response) => {
  const { title, content } = request.body;
  const newNote = { title, content, id: noteID };
  if (!title || !content) {
    return sendUserError(
      'A title and content text are required.',
      response
    );
  }

  notes.push(newNote);
  noteID++;
  response.json(notes);
});

server.put('/notes/:id', (request, response) => {
  const { id } = request.params;
  const { title, content } = request.body;
  const findNoteByID = note => { return note.id == id };

  const foundNote = notes.find(findNoteByID);
  if (!foundNote) {
    return sendUserError('No Note found by that ID', response);
  } else {
    if (title) foundNote.title = title;
    if (content) foundNote.content = content;
    response.json(notes);
  }
});

server.delete('/notes/:id', (request, response) => {
  const { id } = request.params;
  const foundNote = notes.find(note => note.id == id);

  if (foundNote) {
    notes = notes.filter(note => note.id != id);
    response.status(200).json(notes);
  } else {
    sendUserError('No note by that ID exists in the note DB', response);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
