const initialState = [
  {
    "tags": ["tag", "otherTag"],
    "title": "Note Title",
    "textBody": "Note Body",
  }
];

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default notesReducer;