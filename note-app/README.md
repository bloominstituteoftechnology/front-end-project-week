Contents:
  (a) Trello 
  (b) List of Components


(a) Trello
Trello URL: https://trello.com/b/Hrk9cf8X/front-end-board

(b) List of Components:
  1. Page to display the content on, with different routes for different      URLs - the header and nav bar remain throughout, and only the content    on the page changes.
  2. Header with a light grey underline, slight padding, changes based on     the text properties
  3. Nav Bar along left side, with title 'Lambda Notes'
  4. 2 Buttons in nav bar - 'View your notes' and '+Create new note'. Each    links to different page
  5. 4 Routes: 
      (1) Notes Home: contains a box spread of all notes currently made,       3x3 grid, content header 'Your notes'
      (2) Create New: contains 2 boxes, note title (receives input) and        note description (receives input), and a 'save' button at end.       content header 'create new note'.
      (3) Edit Note: same as #2, with 'edit note' for content head 
      (4) View Note - displays the note title/description, saved to a          state, with edit/delete button on top right that route to            different pages. Delete drops a modal that asks to confirm           deletion, and 2 options 'delete' and 'no'
    
