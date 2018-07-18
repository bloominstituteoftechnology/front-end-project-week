const initialState = {
  notes: [],
  note: null,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'NOTES_FETCHED':
      return { ...state, notes: action.payload };

    case 'NOTE_FETCHED':
      return { ...state, note: action.payload };

    case 'NOTE_EDITED':
      return { ...state, note: action.payload };

    case 'ERROR':
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
