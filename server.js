const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const jsonfile = require('jsonfile');
const file = './lambda-notes/src/Data/Notes.json';

app.use(bodyParser.json());
app.use(cors());

app.post('/api/login', (req, res) => {
  const user = req.body;
  console.log(user);
  jsonfile.readFile(file, function(err, obj) {
    if(obj.profiles[user.username] !== undefined){
      if(obj.profiles[user.username].password === user.password) {
        res.send({notes:[...obj.profiles[user.username].notes], loggedIn: true, username:user.username});
      } else {
        console.log('incorrect password');
      }
    } else {
      console.log('incorrect username');
    }
  })
})
app.post('/api/register', (req, res) => {
  const newUser = {[req.body.username]: {password:req.body.password, notes: []}};
  jsonfile.readFile(file, function(err, obj) {
    const newObj = Object.assign({}, obj.profiles, newUser);
    jsonfile.writeFile(file, {profiles:newObj});
  })
})
app.post('/api/notes', (req, res) => {
  jsonfile.readFile(file, function(err, obj) {
    const user = req.body.username;
    const note = {id: req.body.id, header: req.body.header, body:  req.body.body};
    obj.profiles[user].notes.push(note);
    jsonfile.writeFile(file, obj);
    res.send({loggedIn: true, notes: obj.profiles[user].notes, username: user});
  });
});

app.put('/api/notes/:id', (req, res) => {
  const user = req.body.username;
  const update = {header: req.body.header, body:req.body.body};
  const { id } = req.params;
  jsonfile.readFile(file, function(err, obj) {
    obj.profiles[user].notes.map(note => {
      if(note.id === id) {
        note.header = update.header;
        note.body = update.body;
      }
    });
    jsonfile.writeFile(file, obj);
    res.send({loggedIn: true, username: user, notes:obj.profiles[user].notes});
  });
});

app.delete('/api/notes/:id/:user', (req, res) => {
  const { id } = req.params;
  const {user} = req.params;

  jsonfile.readFile(file, function(err, obj) {
    console.log(obj);
    obj.profiles[user].notes = obj.profiles[user].notes.filter((note) => note.id !== id);
    console.log(obj);
    jsonfile.writeFile(file, obj);
    res.send({username:user, loggedIn: true, notes: obj.profiles[user].notes});
  });
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
