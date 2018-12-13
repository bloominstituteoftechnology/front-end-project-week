import { GET_NOTES } from "../actions";
const initialState = {
  notes: []
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload
      };
    default:
      return { state };
  }
};

export default notesReducer;
