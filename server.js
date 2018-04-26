const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const jsonfile = require('jsonfile');
const file = './lambda-notes/src/Data/Notes.json';

app.use(bodyParser.json());
app.use(cors());

app.get('/api/notes', (req, res) => {
    jsonfile.readFile(file, function(err, obj) {
      res.send(obj.notes);
    });
});

app.post('/api/notes', (req, res) => {
  jsonfile.readFile(file, function(err, obj) {
    let updatedNotes = {notes:[...obj.notes,{...req.body}]};
    jsonfile.writeFile(file, updatedNotes);
    res.send(updatedNotes.notes);
  });
});

app.put('/api/notes/:id', (req, res) => {
  const { id } = req.params;
  jsonfile.readFile(file, function(err, obj) {
    obj.notes.map(note => {
      if(note.id === id){
        note.header = req.body.header;
        note.body = req.body.body;
      }})
    jsonfile.writeFile(file, obj);
    res.send(obj.notes);
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const { id } = req.params;
  let updatedNotes;
  jsonfile.readFile(file, function(err, obj) {
    updatedNotes = obj.notes.filter((note) => note.id !== id);
    jsonfile.writeFile(file, {notes:updatedNotes})
    res.send(updatedNotes);
  });
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
