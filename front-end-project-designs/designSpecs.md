Heading font: Roboto Bold
Everything else font: Raleway Medium

Heading and main font color: #4A4A4A
Button font color: #FFFFFF

Sidebar background: #D8D8D8
Main background: #F3F3F3
Main button background: #2BC1C4
Delete button background: #D0021B
Border color used throughout: #979797

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

    "tags": [],
    "_id": "",
    "title": "",
    "textBody": "",
    "__v": 0

},
