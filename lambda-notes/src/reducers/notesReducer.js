
const initialState = {
  notes: [{title: '', textBody: ''}],
  gettingNotes: false,
  savingNote: false,
  deletingNote: false,
  editingNote: false,
  error: null,
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GETTING_NOTES':
      return { ...state, gettingNotes: true};
    case 'GET_NOTES':
      return { ...state, notes: action.notes, gettingNotes: false};
    case 'SAVE_NOTE':
      return [...state, { title: action.title, textBody: action.textBody}];
    case 'DELETE_NOTE':
      return state.notes.filter((note) => note.id !== action.id);
    case 'EDIT_NOTE':
      return state.notes.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            ...action.changedNote
          };
        } else {
          return note;
        }
      });
    case 'ERROR':
      return {
        ...state,
        gettingNotes: false,
        savingNote: false,
        deletingNote: false,
        editingNote: false,
        error: action.error,
      };
    default:
      return state;
  };
};

export default notesReducer;