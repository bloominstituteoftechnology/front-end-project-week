export const addNote = (title, body, id) => ({
  type: 'addNote',
  note: {
    title: title,
    body: body,
    id: id,
  }
});

export const editNote = () => ({
  type: 'editNote',
  title: '',
  body: '',
  id: '',
});

export const deleteNote = () => ({
  type: 'deleteNote',
  id: '',
});
