## Notes API

- A server that will deliver notes can be found [here](https://fe-notes.herokuapp.com):

- One thing to be aware of is that this server is a shared resource. Any notes you enter will be viewable to everyone who connects to the server.

- A note has this basic format:

```js
  {
    "tags": ["tag", "otherTag"],
    "title": "Note Title",
    "textBody": "Note Body",
  }
```

- There is also an "\_id" attribute, which is a long string of numbers and letters. It is automatically assigned by the server and will be returned as part of the data.

### https://fe-notes.herokuapp.com/note/get/all

a `GET` request to this route will return a list of all the notes.

### https://fe-notes.herokuapp.com/note/get/id

a `GET` request to this route (with "id" replaced by the note ID) will return the note with the specified ID.

### https://fe-notes.herokuapp.com/note/create

a `POST` request to this route with the title and text in the req.body will create a new note. The response from the server will be the ID of the new note.

### https://fe-notes.herokuapp.com/note/edit/id

a `PUT` request to this route with the title and text in the req body will edit the note with the specified ID. The response from the server will be the updated note object.

### https://fe-notes.herokuapp.com/note/delete/id

a `DELETE` request to this route will delete the note with the specified ID.
