const initialState = {
  notes: [],
  note: null,
  updating: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCHING_NOTES':
      return { ...state, updating: true };

    case 'NOTES_FETCHED':
      return { ...state, updating: false, notes: action.payload };

    case 'ADDING_NOTE':
      return { ...state, updating: true };

    case 'NOTE_ADDED':
      return { ...state, updating: false };

    case 'FETCHING_NOTE':
      return { ...state, updating: true };

    case 'NOTE_FETCHED':
      return { ...state, updating: false, note: action.payload };

    case 'EDITING_NOTE':
      return { ...state, updating: true };

    case 'NOTE_EDITED':
      return { ...state, updating: false, note: action.payload };

    case 'DELETING_NOTE':
      return { ...state, updating: true };

    case 'NOTE_DELETED':
      return { ...state, updating: false };

    case 'ERROR':
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
