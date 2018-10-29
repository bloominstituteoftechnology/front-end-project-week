import * as actionTypes from '../actions';

const initialState = {
  notes: [],
  gettingNotes: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_NOTES:
      return { ...state, gettingNotes: true }
    case actionTypes.GET_NOTES:
      return { ...state, notes: action.payload, gettingNotes: false }
    case actionTypes.ERROR:
      return {
        ...state,
        gettingNotes: false,
        error: action.payload
      }
    default:
      return state;
  }
}
