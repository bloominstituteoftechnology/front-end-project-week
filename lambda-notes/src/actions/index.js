export const ADD_NOTE = "ADD_NOTE";

let nextId = 10;
export const addNote = data => ({
  type: ADD_NOTE,
  title: data.title,
  text: data.text,
  id: nextId++,
});
