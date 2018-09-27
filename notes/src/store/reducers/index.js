import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  FETCH_DATA,
  GET_DATA,
  ERROR
} from "../actions";

const initialState = {
  notes: [],
  fetching: false,
  success: false,
  error: null
};

export const noteReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, fetching: true, success: false };

    case ERROR:
      return { ...state, error: "Error with notes" + action.err };

    case GET_DATA:
      return { ...state, notes: action.payload, fetching: false, success: true };

    case ADD_NOTE:
      const newNote = { ...action.payload };

      return {
        notes: [
          ...state.notes,
          {
            ...newNote
          }
        ],
        fetching: false,
        success: true,
      };

    case DELETE_NOTE:
      let position = state.notes.findIndex(note => note._id === action.id);
      return {
        notes: [
          ...state.notes.slice(0, position),
          ...state.notes.slice(position + 1)
        ],
        fetching: false,
        success: true,
      };

    case EDIT_NOTE:
      // console.log(action.payload)
      let editPosition = state.notes.findIndex(
        note => note._id === action.payload._id
      );
      console.log(action.payload.description);
      return {
        notes: [
          ...state.notes.slice(0, editPosition),
          { ...action.payload },
          ...state.notes.slice(editPosition + 1)
        ],
        fetching: false,
        success: true,
      };

    default:
      return state;
  }
};
