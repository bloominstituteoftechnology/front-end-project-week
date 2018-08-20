// 1. View note
export const VIEW_NOTE = "VIEW_NOTE";
export const viewNote = () => ({
  type: VIEW_NOTE
});

// 2. Add note
export const ADD_NOTE = "ADD_NOTE";
export const addNote = (title, content) => ({
  type: ADD_NOTE,
  payload: {
    id: '',
    title: title,
    content: content
  }
});

// 3. Edit note
export const EDIT_NOTE = "EDIT_NOTE";
export const editNote = (title, content) => ({
  type: EDIT_NOTE,
  payload: {
    id: '',
    title: title,
    content: content
  }
});

// 4. Delete note
export const DELETE_NOTE = "DELETE_NOTE";
export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id
});

// 5. View List
export const VIEW_LIST = "VIEW_LIST";
export const viewList = () => ({
  type: VIEW_LIST
});
