import { GETTING_NOTES, NOTES_GOT, FAILURE } from "../actions";

const initialState = {
  notes: [],
  gettingNotes: false,
  notesGot: false,
  error: null
};

const lambdaReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETTING_NOTES:
      return { ...state, gettingNotes: true };
    case NOTES_GOT:
      return { ...state, gettingNotes: false, notesGot: true, notes: payload };
    case FAILURE:
        return{...state, gettingNotes:false, notesGot:false, error:payload,}
    default:
      return state;
  }
};

export default lambdaReducer;
