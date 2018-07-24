const initialState = [
  {
    "tags": ["tag", "otherTag"],
    "title": "Note 1",
    "textBody": "Note 1",
  },
  {
    "tags": ["tag", "otherTag"],
    "title": "Note 2",
    "textBody": "Note 2",
  },
  {
    "tags": ["tag", "otherTag"],
    "title": "Note 3",
    "textBody": "Note 3",
  }
];

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default notesReducer;