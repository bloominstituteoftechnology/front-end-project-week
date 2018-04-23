import * as AT from '../actions/actionTypes'

const initialState = {
  fetching: false,
  notes: []
}

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.FETCH_NOTES:
      return Object.assign({}, state, {notes: [state.notes]});
      case AT.CREATE_NOTE: 
      return Object.assign({}, state, {notes: [...action.payload]});
      default: 
      return state;
  }
}