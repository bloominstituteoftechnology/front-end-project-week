
const initialState = [
  {
    "tags": ["tag", "otherTag"],
    "title": "Note 1",
    "textBody": "Note 1",
    "id": 1,
  },
  {
    "tags": ["tag", "otherTag"],
    "title": "Note 2",
    "textBody": "Note 2",
    "id": 2,
  },
  {
    "tags": ["tag", "otherTag"],
    "title": "Note 3",
    "textBody": "Note 3",
    "id": 3,
  }
];

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_NOTE':
      return [...state, { title: action.title, textBody: action.textBody}];
    case 'DELETE_NOTE':
      return state.filter((note) => note.id !== action.id);
    case 'EDIT_NOTE':
      return state.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            ...action.changedNote
          };
        } else {
          return note;
        }
      });
    default:
      return state;
  }
}

export default notesReducer;