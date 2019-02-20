import { LOADING, SUCCESS, SUCCESS_NOTE, ERROR } from "../actions/noteActions";

const initialState = {
  notes: [],
  loading: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, { loading: true });
    case SUCCESS:
      return Object.assign({}, state, {
        notes: [...action.notes],
        loading: false,
        error: ""
      });
    case SUCCESS_NOTE:
      return Object.assign({}, state, {
        singleNote: action.singleNote,
        loading: false,
        error: ""
      });
    case ERROR:
      return Object.assign({}, state, {
        error: action.errorMessage,
        loading: false
      });
    default:
      return state;
  }
};
