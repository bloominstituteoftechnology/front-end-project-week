const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let nextId = 6;

let notes = [
  {
    id: 0,
    date: "Date created",
    title: "Note title 0",
    shortContent:
      "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis .",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.\nMorbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."
  },
  {
    id: 1,
    date: "Date created",
    title: "Note title 1",
    shortContent:
      "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis .",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.\nMorbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."
  },
  {
    id: 2,
    date: "Date created",
    title: "Note title 2",
    shortContent:
      "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis .",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.\nMorbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."
  },
  {
    id: 3,
    date: "Date created",
    title: "Note title 3",
    shortContent:
      "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis .",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.\nMorbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."
  },
  {
    id: 4,
    date: "Date created",
    title: "Note title 4",
    shortContent:
      "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis .",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.\nMorbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."
  },
  {
    id: 5,
    date: "Date created",
    title: "Note title 5",
    shortContent:
      "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis .",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.\nMorbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."
  },
  {
    id: 6,
    date: "Date created",
    title: "Note title 6",
    shortContent:
      "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis .",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.\nMorbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."
  }
];

app.use(bodyParser.json());

app.use(cors());

app.get('/notes', (req, res) => {
  res.send(notes);
});

app.get('/notes/:id', (req, res) => {
  const note = notes.find(f => f.id == req.params.id);

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

/*
Ryan's note server can be found here:
https://killer-notes.herokuapp.com

One thing to be aware of is that this server is a shared resource. Any notes you enter will be viewable to everyone who connects to the server.
A note has this basic format:

  {
    "tags": ["tag", "otherTag"],
    "title": "Note Title",
    "textBody": "Note Body",
  }

There is also an "_id" attribute, which is a long string of numbers and letters. It is automatically assigned by the server and will be returned as part of the data.

https://killer-notes.herokuapp.com/note/get/all
a GET request to this route will return a list of all the notes.

https://killer-notes.herokuapp.com/note/get/id
a GET request to this route (with "id" replaced by the note ID) will return the note with the specified ID.

https://killer-notes.herokuapp.com/note/create
a POST request to this route with the title and text in the req.body will create a new note. The response from the server will be the ID of the new note.

https://killer-notes.herokuapp.com/note/edit/id
a PUT request to this route with the title and text in the req body will edit the note with the specified ID. The response from the server will be the updated note object.

https://killer-notes.herokuapp.com/note/delete/id
a DELETE request to this route will delete the note with the specified ID.
*/