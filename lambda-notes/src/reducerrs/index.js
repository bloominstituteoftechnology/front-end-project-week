const initialState = {
  notes: [],
  users: [],
  note: null,
  user: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "NOTES_FETCHED":
      return { ...state, notes: action.payload };

    case "NOTE_FETCHED":
      return { ...state, note: action.payload };

    case "NOTE_EDITED":
      return { ...state, note: action.payload };

    case "USERS_FETCHED":
      return { ...state, users: action.payload };

    case "USER_FETCHED":
      return { ...state, user: action.payload };

    case "USER_EDITED":
      return { ...state, user: action.payload };

    case "ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
