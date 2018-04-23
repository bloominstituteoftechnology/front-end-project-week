import * as AT from "../actions/actionTypes";

const initialState = {
  notes: [
    {
      title: "someTitle",
      content: "someConent",
      id: 0
    }
  ]
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.FETCH_NOTES:
      return Object.assign({}, state, { notes: [state.notes] });
    case AT.CREATE_NOTE:
      return Object.assign({}, state, { notes: [...action.payload] });
    default:
      return state;
  }
};

export default noteReducer;
