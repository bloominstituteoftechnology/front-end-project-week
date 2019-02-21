## Lambda School Notes API

- A server that will deliver notes can be found [here](https://lambda-schools-notes.herokuapp.com):


- A note has this basic format:

```js
  {
    "tags": ["tag", "otherTag"],  < Curently not being used at this time.
    "title": "Note Title",
    "textBody": "Note Body",
  }
```


### https://lambda-schools-notes.herokuapp.com/notes/get/all

a `GET` request to this route will return a list of all the notes.

### https://lambda-schools-notes.herokuapp.com/notes/:id

a `GET` request to this route (with "id" replaced by the note ID) will return the note with the specified ID.

### https://lambda-schools-notes.herokuapp.com/notes/create

a `POST` request to this route with the title and text in the req.body will create a new note. The response from the server will be the ID of the new note.

### https://lambda-schools-notes.herokuapp.com/notes/edit/:id

a `PUT` request to this route with the title and text in the req body will edit the note with the specified ID. The response from the server will be the updated note object.

### https://lambda-schools-notes.herokuapp.com/notes/delete/:id

a `DELETE` request to this route will delete the note with the specified ID.
