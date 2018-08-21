let NoteId = 1;

// View note
export const VIEW_NOTE = "VIEW_NOTE";
export const viewNote = (id) => ({
  type: VIEW_NOTE,
  payload: id
});

// View List
export const VIEW_LIST = "VIEW_LIST";
export const viewList = () => ({
  type: VIEW_LIST
});

// View add note
export const VIEW_ADDNOTE = "VIEW_ADDNOTE";
export const viewAddNote = () => ({
  type: VIEW_ADDNOTE
})

// View edit note
export const VIEW_EDITNOTE = "VIEW_EDITNOTE";
export const viewEditNote = () => ({
  type: VIEW_EDITNOTE
})

// View delete note
export const VIEW_DELETENOTE = "VIEW_DELETENOTE";
export const viewDeleteNote = () => ({
  type: VIEW_DELETENOTE
})

// Add note
export const ADD_NOTE = "ADD_NOTE";
export const addNote = (title, content) => ({
  type: ADD_NOTE,
  payload: {
    id: ++NoteId,
    title: title,
    content: content
  }
});

// Edit note
export const EDIT_NOTE = "EDIT_NOTE";
export const editNote = (title, content, id) => ({
  type: EDIT_NOTE,
  payload: {
    id: id,
    title: title,
    content: content
  }
});

// Delete note
export const DELETE_NOTE = "DELETE_NOTE";
export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id
});