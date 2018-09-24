const notesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_NOTES':
      return { ...state, isLoading: true };
    case 'GET_NOTES_SUCCESS':
      return { ...state, isLoading: false, notes: action.payload };
    case 'GET_NOTES_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'ADD_NOTE':
      return { ...state, fetching: true };
    case 'ADD_NOTE_SUCCESS':
      return {
        ...state,
        notes: action.payload,
        fetching: false,
        fetched: true
      };
    case 'ADD_NOTE_ERROR':
      return { ...state, fetching: false, error: action.payload }; // would new Error(action.payload) provide more info? test

    case 'EDIT_NOTE':
      return { ...state, editing: true }; // not sure an editing field is necessary
    case 'EDIT_NOTE_SUCCESS':
      return { ...state, editing: false, notes: action.payload };
    case 'EDIT_NOTE_ERROR':
      return { ...state, editing: false, error: action.payload };
      case 'DELETE_NOTE':
      return { ...state, deleting: true };
    case 'DELETE_NOTE_SUCCESS':
      return { ...state, deleting: false, notes: action.payload };
    case 'DELETE_NOTE_ERROR':
      return { ...state, deleting: false, error: action.payload };
    default:
      return state;
  }
}

export default notesReducer;