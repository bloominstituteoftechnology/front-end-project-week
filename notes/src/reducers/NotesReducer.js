const NotesReducer = (state = [], action) => {
  switch (action.type) {

    case 'ADD_NOTE':
      return { ...state, notes: state.notes.concat(action.payload)};

    case 'VIEW_NOTE':
      return { ...state, current: action.payload };

    case 'EDIT_NOTE':
      return { ...state, notes: state.notes.map(note => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      })};

    case 'DELETE_NOTE':
      return { ...state, notes: state.notes.filter(note => note.id !== action.payload) };

    case 'REORDER_NOTES':
      if ( action.searching ) {
        return { ...state, searchResults: action.payload };
      }
      return { ...state, notes: action.payload };

    case 'SEARCH_NOTES':
      return { ...state, searchResults: action.payload, searchTerms: action.searchTerms };

    case 'SORT_NOTES':
      if (action.searching) {
        return { ...state, searchResults: action.payload, sorted: action.sorted, hash: action.hash };
      }
      return { ...state, notes: action.payload, sorted: action.sorted, hash: action.hash };

    case 'CHANGE_NOTE_LABEL':
      return { ...state, notes: state.notes.map(note => {
        if (note.id === action.id) {
          return { ...note, label: action.payload };
        }
        return note;
      })};

    default:
      return state;
  }
}

export default NotesReducer;