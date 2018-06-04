# LeftNav
* On the leftmost portion of the screen, it will be always visible.
# Main Content
* Following the LeftNav and taking up the rest of the screen, always visible
* Will contain a different component depending on the route
* Stretch: Will display an error if the route does not exist (404)
# NotesList
* Will be displayed when navigating to /notes
* Will display a list of notes stored in an array by mapping over them
Each note listed will be a link to that particular note’s “NoteView”  /note/id
# NoteView
* Will display one note from the notes array
* The note will be chosen by looking at the route’s id:  /note/id
* Will have edit and delete buttons on the top right corners
# EditNote
* Will allow editing of a note from the notes array
* The note will be chosen by looking at the route’s id:  /edit/id
* Will have 2 Text Fields and a Submit Button.
# CreateNote
* Will allow for creation of a note and inserting into the notes array
* Will have 2 Text Fields and a Submit Button.
# DeleteNote
* A modal with 2 buttons, Delete and No
