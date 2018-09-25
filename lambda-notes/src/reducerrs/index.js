const initialState = {
  notes: [],
  note: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case "NOTES_FETCHED":
      return { ...state, notes: action.payload };

    default:
      return state;
  }
};
