import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  GET_NOTES,
  NOTES_SUCCESS,
  ERROR,
  CREATE
} from "../actions";

const initialState = {
  notes: [
    { title: "Redux Fundamentals", content: "dispatch stuff", id: "01" },
    {
      title: "Reducers and  Actions",
      content: "types and payloads and stuff",
      id: "02"
    }
  ],
  note: [],
  fetching: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, { ...action.payload }] };
    case DELETE_NOTE:
      return {
        ...state
      };
    case EDIT_NOTE:
      const { _id, ...res } = action.payload;
      return {
        ...state,
        note: state.note.map(note => {
          return note._id === _id ? { ...note, ...res } : note;
        })
      };
    case GET_NOTES:
      return { ...state, fetching: true };
    case NOTES_SUCCESS:
      return { ...state, note: [...action.payload], fetching: false };
    case ERROR:
      return { ...state, fetching: false, error: action.payload };
    case CREATE:
      return { ...state, note: [...state.note, ...action.payload] };
    default:
      return state;
  }
};
